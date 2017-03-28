/*
* name;
*/
class HttpUtils{
    constructor(){
        this.baseurl = "http://localhost:8888";
        this.http = new Laya.HttpRequest();
        this.http.once(Laya.Event.PROGRESS,this,this.onHttpRequestProgress);
        this.http.once(Laya.Event.COMPLETE,this,this.onHttpRequestComplete);
        this.http.once(Laya.Event.ERROR,this,this.onHttpRequestError);
    }

    public http:Laya.HttpRequest;
    public baseurl:string;

    sendPost(pars:Array<[string,any]>):void{
        var par = this.parsToStr(pars);
        this.http.send(this.baseurl, par, 'post', 'json',["Content-Type", "application/json"]);
    }

    sendGet(pars:Array<[string,any]>):void{
        var par = this.parsToStr(pars);
        this.http.send(this.baseurl+"?"+par, null, 'get', 'json',["Content-Type", "application/json"]);
    }
    parsToStr(pars:Array<[string,any]>):string{
        var par = "";
        for(var i = 0 ;i < pars.length;i++){
            par += pars[i][0]+"="+pars[i][1];
            if(i < pars.length-2){
                par += "&";
            }
        }
        console.log("par:",par);
        return par;
    }
    onHttpRequestProgress(e):void{
       console.log(e);
    }
    onHttpRequestComplete(e):void{
       console.log(this.http.data);
    }
    onHttpRequestError(e):void{
       console.log(e);
    }

}