const npmlog = require("npmlog");
const readline = require("readline")
const dc = require("diagnostics_channel")

const channel = dc.channel('hsi-njsbs-dc');
// █▓▒░
console.clear()
npmlog.info("NJSBS", process.env)
npmlog.info("NJSBS", `█████████████████████████████████████████████████████████████████`)
npmlog.info("NJSBS", `█                                                               █▓`)
npmlog.info("NJSBS", `█ Node.JS Battle Ships [v0.0.1 Development Unsigned Build]      █▓▒`)
npmlog.info("NJSBS", `█                                                               █▓▒░`)
npmlog.info("NJSBS", `█ Connect To IP Address                                         █▓▒░`)
npmlog.info("NJSBS", `█                                                               █▓▒░`)
npmlog.info("NJSBS", `█ Connect To IP [Manual Port Override]                          █▓▒░`)
npmlog.info("NJSBS", `█                                                               █▓▒░`)
npmlog.info("NJSBS", `█ Connect To IP Address [With Diagnostics Channel]              █▓▒░`)
npmlog.info("NJSBS", `█                                                               █▓▒░`)
npmlog.info("NJSBS", `█ Connect To IP [Manual Port Override With Diagnostics Channel] █▓▒░`)
npmlog.info("NJSBS", `█                                                               █▓▒░`)
npmlog.info("NJSBS", `█ Diagnostics [Diagnostics Is Not Compatible For This Game]     █▓▒░`)
npmlog.info("NJSBS", `█                                                               █▓▒░`)
npmlog.info("NJSBS", `█ Select an option by it's index number in the list             █▓▒░`)
npmlog.info("NJSBS", `█                                                               █▓▒░`)
npmlog.info("NJSBS", `█████████████████████████████████████████████████████████████████▓▒░`)
npmlog.info("NJSBS", `▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░`)
npmlog.info("NJSBS", ` ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░`)
npmlog.info("NJSBS", `  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`)
let animationstate = 1
setInterval(() => {
    console.clear()
    if (animationstate == 7) {
        animationstate = 1
    }
    channel.publish({
        some: animationstate
    })
    if (animationstate == 1) {
        npmlog.info(`NJSBS`, `#|     |#`)
        npmlog.info(`NJSBS`, `#|     |#`)
        npmlog.info(`NJSBS`, `#|     |#`)
        npmlog.info(`NJSBS`, `#|     |#`)
        npmlog.info(`NJSBS`, `#|     |#`)
    }
    if (animationstate == 2) {
        npmlog.info(`NJSBS`, ` #|   |#`)
        npmlog.info(`NJSBS`, ` #|   |#`)
        npmlog.info(`NJSBS`, `-#|   |#-`)
        npmlog.info(`NJSBS`, ` #|   |#`)
        npmlog.info(`NJSBS`, ` #|   |#`)
    }
    if (animationstate == 3) {
        npmlog.info(`NJSBS`, `  #| |#`)
        npmlog.info(`NJSBS`, `  #| |#`)
        npmlog.info(`NJSBS`, `--#| |#--`)
        npmlog.info(`NJSBS`, `  #| |#`)
        npmlog.info(`NJSBS`, `  #| |#`)
    }
    if (animationstate == 4) {
        npmlog.info(`NJSBS`, `   #|#`)
        npmlog.info(`NJSBS`, `   #|#`)
        npmlog.info(`NJSBS`, `---#|#---`)
        npmlog.info(`NJSBS`, `   #|#`)
        npmlog.info(`NJSBS`, `   #|#`)
    }
    if (animationstate == 5) {
        npmlog.info(`NJSBS`, `  #| |#`)
        npmlog.info(`NJSBS`, `  #| |#`)
        npmlog.info(`NJSBS`, `--#| |#--`)
        npmlog.info(`NJSBS`, `  #| |#`)
        npmlog.info(`NJSBS`, `  #| |#`)
    }
    if (animationstate == 6) {
        npmlog.info(`NJSBS`, ` #|   |#`)
        npmlog.info(`NJSBS`, ` #|   |#`)
        npmlog.info(`NJSBS`, `-#|   |#-`)
        npmlog.info(`NJSBS`, ` #|   |#`)
        npmlog.info(`NJSBS`, ` #|   |#`)
    }
    
    animationstate = animationstate + 1
}, 100)