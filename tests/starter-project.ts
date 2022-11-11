import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { StarterProject } from "../target/types/starter_project";

describe("starter-project", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.StarterProject as Program<StarterProject>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
