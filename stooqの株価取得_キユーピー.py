#モジュールのインストール
import os
import datetime as dt
import pandas_datareader.data as web

#株価データ取得
code="2809" #マヨネーズ業界
code_name=code+".JP"

start="2023-01-01"
end=dt.date.today()

df=web.DataReader(code_name,data_source="stooq",start=start,end=end)
df.insert(0,"code",code,allow_duplicates=False)

import plotly.express as px
fig=px.line(df,x=df.index,y=df.columns[1:5],title="stooq_data")
fig.show()