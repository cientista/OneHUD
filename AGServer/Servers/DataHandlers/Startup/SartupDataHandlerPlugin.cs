﻿using System;
using System.Linq;

namespace AGServer.Servers.DataHandlers.Startup
{
    class SartupDataHandlerPlugin
    {
        private string _pluginName = "";
        private string _pluginVersion = "";
        private string _gameShortName = "";
        private string _gameLongName = "";

        public string GameLongName
        {
            get
            {
                return _gameLongName;
            }
            set
            {
                _gameLongName = value;
            }
        }

        public string GameShortName
        {
            get
            {
                return _gameShortName;
            }
            set
            {
                _gameShortName = value;
            }
        }

        public string PluginVersion
        {
            get
            {
                return _pluginVersion;
            }
            set
            {
                _pluginVersion = value;
            }
        }

        public string PluginName
        {
            get
            {
                return _pluginName;
            }
            set
            {
                _pluginName = value;
            }
        }
    }
}