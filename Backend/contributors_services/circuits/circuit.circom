pragma circom 2.0.0;
include "../node_modules/circomlib/circuits/poseidon.circom";
template ZkContribution() {
  signal input githubId;
  signal input secretKey;
  signal input prId;
  signal input nonce;
  signal output commitment;

  component poseidon = Poseidon(2);
  poseidon.inputs[0] <== githubId;
  poseidon.inputs[1] <== secretKey;

  component finalHash = Poseidon(3);
  finalHash.inputs[0] <== poseidon.out;
  finalHash.inputs[1] <== prId;
  finalHash.inputs[2] <== nonce;

  commitment <== finalHash.out;
}

component main { public [prId, nonce] } = ZkContribution();