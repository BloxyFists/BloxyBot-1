const noblox = require('noblox.js');

async function run() {
  await noblox.cookieLogin('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_4C7AE3EEFF1CA3E763A63AA8A357F48A8B6426F84CAAD59DD221DFBFBB9CCFCD2DD7F86F7B642CEED07561FB0DB0245BF3A5DD945FE5202FFAE12864EFA691FAC8C6E21453C7D0E0621A7E5657A3169025BA80AC75FDB73A3313FA9EA15DEDC4AD2671C2DA1E3D1F5D3F5D8C01D574F54A8AF5BF9B3AD1C7A218B0EEBE749EC9DD13D31C97EEA95697CB41EF637EA377371B48248154385E2EAE1C26DF6AD1A7E2911AE99E0EA2623E5D10CD3F3E1CAC3BEFD55354B8429CE083CD60F4AC79D9424A53A66977332AF151E777C607AC45DFA2BEC891B7311FA24E23DB47E78230448484B96141C535D778A865C23329F5D74D1BAC7DFB027490E846ECFE58E8FF1EE23A71B78747811CA866F3DA225228EC5E42EE5CA3CBF942578FC59ACA5FF1F514F89B');
  


  //const BlurbPromise = noblox.groupPayout(100451981);

  //const BlurbPromise = noblox.setRank(5377056,41619084, 254);

  const PayOutTest = noblox.setRank(5377056,358666480, 1);
  PayOutTest.then(function(fromResolve){
  	console.log(fromResolve);
  });



// 41619084















}

run();
