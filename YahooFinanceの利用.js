//ParserのID：1Mc8BthYthXx6CoIz90-JiSzSafVnT6U3t0z_W3hLTAX5ek4w0G_EIrNw

//API準備//
function main() {
    const contents=YahooFinanceAPI();
    Output_spr(contents);
  }
  
  
  //本処理//
  function YahooFinanceAPI(){
    //APIのquote取得を行う
    var requestHeaders={
      "X-API-KEY":"API KEY"
    };
  
    var requestOptions={
      "method":"GET",
      "headers":requestHeaders
    };
  
    //urlのsymbols="表示銘柄名"から任意のデータを取得
    var url="https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL%2CBTC-USD%2CEURUSD%3DX";
    var response=UrlFetchApp.fetch(url,requestOptions);
    var responseCode=response.getResponseCode();
    var responseText=response.getContentText();
  
    //JSON形式からparseで処理をかける
    var json=JSON.parse(responseText);
    var result=json["quoteResponse"]["result"];
    var Loop_cnt=result.length;
  
    //配列にデータを保存する
    var i=0;
    var jsonArray=[];
    var jsonArray2=[];
    for(const[key,value] of Object.entries(result[0])){
      jsonArray[i]=value;
      i++;
    }
  
    //配列を転置する
    for(i=0;i<jsonArray.length;i++){
      jsonAray2[i]=[jsonArray[i]];
    }
  
    return jsonArray2;
  }
  
  //取得したデータをスプレッドシートに出力する
  function Output_spr(cont){
    var spreadsheet=SpreadSheetApp.getActiveSpreadSheet();
    var sheet=spreadsheet.getsheets()[0];
  
    var rows=cont.length;
    var cols=cont[0].length;
    sheet.getRange(1,2,rows,cols).setValues(cont);
  }
  