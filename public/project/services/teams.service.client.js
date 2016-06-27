(function(){
    angular
        .module("ProjectApp")
        .factory("TeamService", TeamService);


    function TeamService() {
        var vm=this;
        var teamData, teamUrl;
        var api = {
            findTeams: findTeams,
            findTeamURL: findTeamURL
        };
        return api;


        function findTeams(league) {
            var url;
            switch(league){
                case "Bundesliga":
                    url='http://api.football-data.org/v1/soccerseasons/394/teams'
                    break
                case "PremierLeague":
                    url='http://api.football-data.org/v1/soccerseasons/398/teams'
                    break
                case "SerieA":
                    url='http://api.football-data.org/v1/soccerseasons/401/teams'
                    break
                case "LaLiga":
                    url='http://api.football-data.org/v1/soccerseasons/394/teams'
                    break
                case "Ligue1":
                    url='http://api.football-data.org/v1/soccerseasons/396/teams'
                    break
                case "Bundesliga2":
                    url='http://api.football-data.org/v1/soccerseasons/395/teams'
                    break
                case "Ligue2":
                    url='http://api.football-data.org/v1/soccerseasons/397/teams'
                    break
                case "PrimeraDivison":
                    url='http://api.football-data.org/v1/soccerseasons/399/teams'
                    break
                case "SegundaDivison":
                    url='http://api.football-data.org/v1/soccerseasons/400/teams'
                    break
                case "PrimeraLeague":
                    url='http://api.football-data.org/v1/soccerseasons/402/teams'
                    break
                case "Bundesliga3":
                    url='http://api.football-data.org/v1/soccerseasons/403/teams'
                    break
                case "Eredivisie":
                    url='http://api.football-data.org/v1/soccerseasons/404/teams'
                    break
                case "ChampionsLeague":
                    url='http://api.football-data.org/v1/soccerseasons/405/teams'
                    break
                case "LeagueOne":
                    url='http://api.football-data.org/v1/soccerseasons/425/teams'
                    break
                

            }
            
            var data =$.parseJSON($.ajax({
                async:false,
                headers: { 'X-Auth-Token': 'e9b294b714ba489e913c0948ae0f084e' },
                url: url,
                dataType: 'json',
                type: 'GET'
            }).responseText);
            teamData=data;
            return(data.teams);
            
        }
        
        function findTeamURL(team) {
            var teams=teamData.teams;
            for(var i = 0; i < teams.length; i++) {
                if(teams[i].code == team){
                    teamUrl= teams[i]._links.players.href;
                }
            }
            var playerdata =$.parseJSON($.ajax({
                async:false,
                headers: { 'X-Auth-Token': 'e9b294b714ba489e913c0948ae0f084e' },
                url: teamUrl,
                dataType: 'json',
                type: 'GET'
            }).responseText);
            return(playerdata.players);
        }
    }
})();