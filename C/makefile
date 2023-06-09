INCLUDE = -I/home/dev/temp_test_secp256k1/secp256k1testcpp/cryptopp/include
LIB = -L/home/dev/temp_test_secp256k1/secp256k1testcpp/cryptopp/lib
CRYPTOPP = -lcryptopp
OPENSSL = -lssl -lcrypto
SECP256K1_O = secp256k1_3.0.o
SECP256K1_C = secp256k1_3.0.cpp

SET:
	g++ -c -o $(SECP256K1_O) $(SECP256K1_C) -w $(INCLUDE) $(LIB) $(CRYPTOPP) $(OPENSSL)
	g++ -o test.out $(SECP256K1_O) -w $(INCLUDE) $(LIB) $(CRYPTOPP) $(OPENSSL)
