#pragma warning(disable : 4996)


#define PRIVATE_KEY_HEX_LENGTH 64
#define __HEX_TYPE__ "0x" 
#define __PUBLIC_KEY_CHECK__ "04"

#include <iostream>
#include <string>
#include <vector>
#include <iomanip>
#include <sstream>
#include <regex>
#include <algorithm>

// openssl 3.0 verrsion
#include <openssl/core.h>
#include <openssl/ec.h>
#include <openssl/obj_mac.h>
#include <openssl/bn.h>
#include <openssl/ecdsa.h>
#include <openssl/pem.h>
#include <openssl/evp.h>
#include <openssl/rand.h>
#include <openssl/err.h>
#include <openssl/sha.h>


#include <cryptopp/cryptlib.h>
#include <cryptopp/keccak.h>
#include <cryptopp/hex.h>

// Function check hex
bool isHexString(const std::string& str) {
    std::string lowercaseStr = str;
    std::transform(lowercaseStr.begin(), lowercaseStr.end(), lowercaseStr.begin(), ::tolower);

    std::regex hexRegex("^[0-9a-f]+$");
    return std::regex_match(lowercaseStr, hexRegex);
}

// Function to convert hex string to bytes
std::vector<uint8_t> hexToBytes(const std::string& hex) {
    std::vector<uint8_t> bytes;
    for (size_t i = 0; i < hex.length(); i += 2) {
        std::string byteString = hex.substr(i, 2);
        uint8_t byte = (uint8_t)std::stoi(byteString, nullptr, 16);
        bytes.push_back(byte);
    }
    return bytes;
}

// Function to convert bytes to hex string
std::string bytesToHex(const std::vector<uint8_t>& bytes) {
    static const char* const lut = "0123456789abcdef";
    std::string hex;
    hex.reserve(bytes.size() * 2);
    for (uint8_t byte : bytes) {
        hex.push_back(lut[byte >> 4]);
        hex.push_back(lut[byte & 15]);
    }
    return hex;
}

std::string hexToBinary(const std::string& hex) {
    std::string binary;
    binary.reserve(hex.length() / 2);

    for (std::size_t i = 0; i < hex.length(); i += 2) {
        std::string byteString = hex.substr(i, 2);
        char byte = static_cast<char>(std::strtol(byteString.c_str(), nullptr, 16));
        binary.push_back(byte);
    }

    return binary;
}

std::string keccak256(const std::string& hexInput) {
    std::string binaryInput = hexToBinary(hexInput);

    CryptoPP::Keccak_256 hash;
    std::string hashed;
    hashed.resize(hash.DigestSize());

    hash.Update(reinterpret_cast<const CryptoPP::byte*>(binaryInput.data()), binaryInput.size());
    hash.Final(reinterpret_cast<CryptoPP::byte*>(&hashed[0]));

    std::string hexHashed;
    CryptoPP::HexEncoder encoder(new CryptoPP::StringSink(hexHashed));
    encoder.Put(reinterpret_cast<const CryptoPP::byte*>(hashed.data()), hashed.size());
    encoder.MessageEnd();

    return hexHashed;
}

// Function to convert private key to public key
std::string secp256k1(const std::string& privateKeyHex) {
    // Convert private key from hex to bytes
    std::vector<uint8_t> privateKeyBytes = hexToBytes(privateKeyHex);

    // Create a new EC_KEY object
    EC_KEY* key = EC_KEY_new_by_curve_name(OBJ_sn2nid("secp256k1"));
    if (key == nullptr) {
        std::cerr << "Failed to create EC_KEY object" << std::endl;
        return "";
    }

    // Set the private key
    BIGNUM* privateKeyBN = BN_bin2bn(privateKeyBytes.data(), (int)privateKeyBytes.size(), nullptr);
    if (!EC_KEY_set_private_key(key, privateKeyBN)) {
        std::cerr << "Failed to set private key" << std::endl;
        EC_KEY_free(key);
        BN_free(privateKeyBN);
        return "";
    }

    // Derive the public key from the private key
    EC_POINT* publicKeyPoint = EC_POINT_new(EC_KEY_get0_group(key));
    if (publicKeyPoint == nullptr) {
        std::cerr << "Failed to create EC_POINT object for public key" << std::endl;
        EC_KEY_free(key);
        BN_free(privateKeyBN);
        return "";
    }

    if (!EC_POINT_mul(EC_KEY_get0_group(key), publicKeyPoint, privateKeyBN, nullptr, nullptr, nullptr)) {
        std::cerr << "Failed to derive public key" << std::endl;
        EC_KEY_free(key);
        BN_free(privateKeyBN);
        EC_POINT_free(publicKeyPoint);
        return "";
    }

    // Set the derived public key to the EC_KEY object
    if (!EC_KEY_set_public_key(key, publicKeyPoint)) {
        std::cerr << "Failed to set public key" << std::endl;
        EC_KEY_free(key);
        BN_free(privateKeyBN);
        EC_POINT_free(publicKeyPoint);
        return "";
    }

    // Convert the public key to bytes
    size_t publicKeyLength = EC_POINT_point2oct(EC_KEY_get0_group(key), publicKeyPoint, POINT_CONVERSION_UNCOMPRESSED, nullptr, 0, nullptr);
    std::vector<uint8_t> publicKeyBytes(publicKeyLength);
    EC_POINT_point2oct(EC_KEY_get0_group(key), publicKeyPoint, POINT_CONVERSION_UNCOMPRESSED, publicKeyBytes.data(), publicKeyLength, nullptr);

    // Convert the public key bytes to hex string
    std::string publicKeyHex = bytesToHex(publicKeyBytes);

    // Clean up
    EC_KEY_free(key);
    BN_clear_free(privateKeyBN);
    EC_POINT_clear_free(publicKeyPoint);

    return publicKeyHex;
}

int main() {
    // Private key in hexadecimal format
    std::string privateKeyHex = "";
    std::cout << "private Key 64bit hex: ";
    std::cin >> privateKeyHex;
    std::cout << std::endl;

    std::string checkhex = privateKeyHex.substr(0, 2);
    privateKeyHex = privateKeyHex.substr(2);
    if (checkhex != __HEX_TYPE__ || !isHexString(privateKeyHex))
    {
        std::cout << "private Key 64bit currunt type: \n" << checkhex << std::endl;
        std::cout << "private Key 64bit currunt key: \n" << privateKeyHex << std::endl;
        std::cout << "private Key must be HEX type \n" << std::endl;
        return 0;
    }
    if (privateKeyHex.length() != PRIVATE_KEY_HEX_LENGTH)
    {
        std::cout << "private Key 64bit currunt length: \n" << privateKeyHex.length() << std::endl;
        std::cout << "private Key 64bit length is must \n" << PRIVATE_KEY_HEX_LENGTH << std::endl;
        return 0;
    }

    std::cout << "privateKeyHex length: \n" << privateKeyHex.length() << std::endl;

    // Convert private key to public key
    std::string publicKeyHex = secp256k1(privateKeyHex);

    std::string checkpublicKeyHex = publicKeyHex.substr(0, 2);
    if (checkpublicKeyHex != __PUBLIC_KEY_CHECK__)
    {
        std::cout << "Public Key currunt type: \n" << checkpublicKeyHex << std::endl;
        return 0;
    }
    std::string ethaddress = keccak256(publicKeyHex.substr(2));

    // Output the public key
    std::cout << "Public Key 65B hex: \n" << publicKeyHex << std::endl;
    std::cout << "Public Key 65B hex cut 1byte: \n" << publicKeyHex.substr(2) << std::endl;
    std::cout << "Public Key: \n" << ethaddress.substr(24) << std::endl;

    return 0;
}
