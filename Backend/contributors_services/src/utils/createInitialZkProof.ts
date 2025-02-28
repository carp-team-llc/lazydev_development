import { buildEddsa, Poseidon } from "circomlibjs";
import { EddsaPrivateKey, generateEddsaKeyPair } from "@zk-kit/protocols";

async function createInitialZkProof(githubId: string, secretKey: string): Promise<string> {
  const input = [BigInt(githubId), BigInt(poseidon([secretKey]))]; // Hash secretKey
  const commitment = poseidon(input).toString(); // Tạo commitment thay cho proof đầy đủ
  return commitment; // Trong thực tế, dùng circom để tạo proof phức tạp hơn
}