@echo off
circom circuit.circom --r1cs --wasm --sym -o .
npx snarkjs powersoftau new bn128 12 pot12_0000.ptau
echo random123 | npx snarkjs powersoftau contribute pot12_0000.ptau pot12_0001.ptau --name="First contribution" -v
npx snarkjs groth16 setup circuit.r1cs pot12_0001.ptau circuit_0000.zkey
echo random456 | npx snarkjs zkey contribute circuit_0000.zkey circuit_0001.zkey --name="Second contribution" -v
npx snarkjs zkey export verificationkey circuit_0001.zkey verification_key.json
echo Setup completed!
pause