/**
 * Created by macdja38 on 2016-05-12.
 */
"use strict";

class help {
  /**
   * Instantiates the module
   * @constructor
   * @param {Object} e
   * @param {Eris} e.client Eris client
   * @param {Config} e.config File based config
   * @param {Raven?} e.raven Raven error logging system
   * @param {Config} e.auth File based config for keys and tokens and authorisation data
   * @param {ConfigDB} e.configDB database based config system, specifically for per guild settings
   * @param {R} e.r Rethinkdb r
   * @param {Permissions} e.perms Permissions Object
   * @param {Feeds} e.feeds Feeds Object
   * @param {MessageSender} e.messageSender Instantiated message sender
   * @param {SlowSender} e.slowSender Instantiated slow sender
   * @param {PvPClient} e.pvpClient PvPCraft client library instance
   */
  constructor(e) {
    this.client = e.client;
    this.raven = e.raven;
  }

  // noinspection JSMethodCanBeStatic
  /**
   * Returns an array of commands that can be called by the command handler
   * @returns {[{triggers: [string], permissionCheck: function, channels: [string], execute: function}]}
   */
  getCommands() {
    return [{
      triggers: ["help", "commands", "command"],
      permissionCheck: command => true,
      channels: ["*"],
      execute: command => {
        command.reply("Help can be found at https://bot.pvpcraft.ca/docs");
        return true;
      },
    }];
  }
}

module.exports = help;