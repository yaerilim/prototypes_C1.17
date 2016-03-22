app.provider('navigation', function(){
    this.protoList = {};
    this.toTs = function(dateStr){
        return new Date(dateStr).getTime();
    };
    this.pastNow = function(time) {
        if (!time) {
            return false;
        }
        var now = Date.now();

        if (now > time) {
            return true;
        }
        return false;
    };

    this.$get = function($location, $sce){
        return {
            protoList: this.protoList,
            pastNow: this.pastNow,
            getProtoList: function(list){
                var output = [];

                for(var keys in list){
                    if(list.hasOwnProperty(keys)){
                        for(var i in list[keys]){
                            output.push(list[keys][i]);
                        }
                    }
                }
                return output;
            },
            updateNav: function(){
                var index = $location.$$url.indexOf('-');
                var location;

                if(index != -1){
                    location = $location.$$url.substr(1, index-1);
                    this.subActive = $location.$$url.substr(1);
                }else {
                    location = $location.$$url.substr(1);
                    this.subActive = '';
                }

                var opened = $('#'+ this.active);

                $('#' + location).collapse("show");
                this.active = location;

                if(this.lastActive != this.active){
                    $('#' + this.lastActive).collapse('toggle');
                }
                this.lastActive = this.active;
            },
            trustHtml: function(str){
                return $sce.trustAsHtml(str);
            }
        }
    }
});