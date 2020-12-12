const npmlog = require("npmlog");
const readline = require("readline");
const dc = require("diagnostics_channel");

const channel = dc.channel('hsi-njsbs-dc');
// █▓▒░
console.clear()
npmlog.info("NJSBS", `█████████████████████████████████████████████████████████████████`);
npmlog.info("NJSBS", `█                                                               █▓`);
npmlog.info("NJSBS", `█ Node.JS Battle Ships [v0.0.1 Development Unsigned Build]      █▓▒`);
npmlog.info("NJSBS", `█                                                               █▓▒░`);
npmlog.info("NJSBS", `█ Connect To IP Address                                         █▓▒░`);
npmlog.info("NJSBS", `█                                                               █▓▒░`);
npmlog.info("NJSBS", `█ Connect To IP Address [With Diagnostics Channel]              █▓▒░`);
npmlog.info("NJSBS", `█                                                               █▓▒░`);
npmlog.info("NJSBS", `█ Diagnostics [Diagnostics Is Not Compatible For This Game]     █▓▒░`);
npmlog.info("NJSBS", `█                                                               █▓▒░`);
npmlog.info("NJSBS", `█ Select an option by it's index number in the list             █▓▒░`);
npmlog.info("NJSBS", `█                                                               █▓▒░`);
npmlog.info("NJSBS", `█████████████████████████████████████████████████████████████████▓▒░`);
npmlog.info("NJSBS", `▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░`);
npmlog.info("NJSBS", ` ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░`);
npmlog.info("NJSBS", `  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("", (a) => {
    if (a == "1") {
        rl.question("Which IP? ", () => {
            npmlog.error("NJSBS", `Area Not Completed`)
            process.exit()
        });
    }
});