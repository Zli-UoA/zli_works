{
  description = "Zli.works Website";

  inputs = {
    nixpkgs = { url = "github:nixos/nixpkgs/nixpkgs-unstable"; };
    flake-utils = { url = "github:numtide/flake-utils"; };
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        inherit (nixpkgs.lib) optional;
        pkgs = import nixpkgs {inherit system;};
      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs
          ];
        };
      });
}
