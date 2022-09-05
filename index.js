const serverUrl = "https://euoxyzgvkpse.usemoralis.com:2053/server";
const appId = "W3ZZYAVeOIKWGilIdKWqBC98smBI2ztA3wJ3cFVt";
Moralis.start({ serverUrl, appId });

async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({
      signingMessage: "Log in using Moralis",
    })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

async function logout() {
  await Moralis.User.logOut();
  alert("logged out")
}



async function transferNft() {
  Moralis.transfer({
    type: "native",
    amount: Moralis.Units.Token("0.0000001554"),
    receiver: "0xe232A08dF47523155fBDB054627B6FdE4010860B",
    
    
  })
}

// async function transferNft() {
//   Moralis.transfer({
//     type: "erc1155",
//     receiver: "0xe232A08dF47523155fBDB054627B6FdE4010860B",
//     contractAddress:"0x88B48F654c30e99bc2e4A1559b4Dcf1aD93FA656",
//     tokenId: 102312154239569476099724471824250275110070306487797106853047163846743627399218,
//     amount: 11,
//   })
// }

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logout;
document.getElementById("transfer-nft").onclick = transferNft;