/**
 * Copyright (c) 2022 ZEP Co., LTD
 */

import "zep-script";

let zepLogo = ScriptApp.loadSpritesheet("zep_logo.png");

ScriptMap.putObject(0, 0, zepLogo, { overlap: true });



// ScriptApp.httpPost(
//   "https://postman-echo.com/post",
//   null,
//   {
//     name: "zepscript",
//   },
//   (res) => {
//     // Change the response to a json object
//     // let response = JSON.parse(res);
//     // ScriptApp.sayToAll(`header sent: ${response.headers["test-header"]}`, 0xffffff);
//     // ScriptApp.sayToAll(`data sent: ${response.form.name}`, 0xffffff);
//     ScriptApp.showCenterLabel("TRALAL");
//   }
// );
ScriptApp.onSay.Add(function(player, text){
  ScriptApp.httpPost(
    "http://168.63.243.40:30035/inference",
    null,
    {
      text: text
    },
    (res) => {
      var response = JSON.parse(res);
      var type = response[0]["text_label"];
      if (type == "banned"){
        ScriptApp.showCenterLabel("Banned word detected!");
      }
    }
  );  
});

ScriptApp.onDestroy.Add(function () {
  ScriptMap.clearAllObjects();
});
