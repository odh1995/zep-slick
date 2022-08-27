/**
 * Copyright (c) 2022 ZEP Co., LTD
 */

import "zep-script";

ScriptApp.showCenterLabel("Hello World");

let zepLogo = ScriptApp.loadSpritesheet("zep_logo.png");

ScriptMap.putObject(0, 0, zepLogo, { overlap: true });

let _answer = "ZEP"
ScriptApp.onSay.Add(function(player, text){
  if (_answer == text){
    ScriptApp.showCenterLabel(player.name + ' Correct!\nThe answer is ' + _answer);
  }
})

ScriptApp.onDestroy.Add(function () {
  ScriptMap.clearAllObjects();
});
