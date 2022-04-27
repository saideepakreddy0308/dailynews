import "./App.css";
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from "./components/News";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  pageSize = 6;
  state = {
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar />
        <LoadingBar height={3} color='#f11946' progress={this.state.progress} />
        <Switch>
        {/* npm install react-router-dom@5.2.0 */}
        <Route exact path="/"><News setProgress={this.setProgress}  key = "general"  pageSize={this.pageSize} country="in" category="general"/> </Route>
        <Route exact path="/business"><News setProgress={this.setProgress}  key = "business"  pageSize={this.pageSize} country="in" category="business"/> </Route>
        <Route exact path="/entertainment"><News setProgress={this.setProgress}  key = "entertainment"  pageSize={this.pageSize} country="in" category="entertainment"/> </Route>
        <Route exact path="/health"><News setProgress={this.setProgress}  key = "health"  pageSize={this.pageSize} country="in" category="health"/> </Route>
        <Route exact path="/science"><News setProgress={this.setProgress}  key = "science"  pageSize={this.pageSize} country="in" category="science"/> </Route>
        <Route exact path="/sports"><News setProgress={this.setProgress}  key = "sports"  pageSize={this.pageSize} country="in" category="sports"/> </Route>
        <Route exact path="/technology"><News setProgress={this.setProgress}  key = "technology"  pageSize={this.pageSize} country="in" category="technology"/> </Route>
        <Route exact path="/us"><News setProgress={this.setProgress}  key = "us"  pageSize={this.pageSize} country="us" category="general"/> </Route>
        <Route exact path="/gb"><News setProgress={this.setProgress}  key = "gb"  pageSize={this.pageSize} country="gb" category="general"/> </Route>
        <Route exact path="/ae"><News setProgress={this.setProgress}  key = "ae"  pageSize={this.pageSize} country="ae" category="general"/> </Route>
        <Route exact path="/ar"><News setProgress={this.setProgress}  key = "ar"  pageSize={this.pageSize} country="ar" category="general"/> </Route>
        <Route exact path="/at"><News setProgress={this.setProgress}  key = "at"  pageSize={this.pageSize} country="at" category="general"/> </Route>
        <Route exact path="/au"><News setProgress={this.setProgress}  key = "au"  pageSize={this.pageSize} country="au" category="general"/> </Route>
        <Route exact path="/be"><News setProgress={this.setProgress}  key = "be"  pageSize={this.pageSize} country="be" category="general"/> </Route>
        <Route exact path="/bg"><News setProgress={this.setProgress}  key = "bg"  pageSize={this.pageSize} country="bg" category="general"/> </Route>
        <Route exact path="/br"><News setProgress={this.setProgress}  key = "br"  pageSize={this.pageSize} country="br" category="general"/> </Route>
        <Route exact path="/ca"><News setProgress={this.setProgress}  key = "ca"  pageSize={this.pageSize} country="ca" category="general"/> </Route>
        <Route exact path="/ch"><News setProgress={this.setProgress}  key = "ch"  pageSize={this.pageSize} country="ch" category="general"/> </Route>
        <Route exact path="/cn"><News setProgress={this.setProgress}  key = "cn"  pageSize={this.pageSize} country="cn" category="general"/> </Route>
        <Route exact path="/co"><News setProgress={this.setProgress}  key = "co"  pageSize={this.pageSize} country="co" category="general"/> </Route>
        <Route exact path="/cu"><News setProgress={this.setProgress}  key = "cu"  pageSize={this.pageSize} country="cu" category="general"/> </Route>
        <Route exact path="/cz"><News setProgress={this.setProgress}  key = "cz"  pageSize={this.pageSize} country="cz" category="general"/> </Route>
        <Route exact path="/de"><News setProgress={this.setProgress}  key = "de"  pageSize={this.pageSize} country="de" category="general"/> </Route>
        <Route exact path="/eg"><News setProgress={this.setProgress}  key = "eg"  pageSize={this.pageSize} country="eg" category="general"/> </Route>
        <Route exact path="/fr"><News setProgress={this.setProgress}  key = "fr"  pageSize={this.pageSize} country="fr" category="general"/> </Route>
        <Route exact path="/gr"><News setProgress={this.setProgress}  key = "gr"  pageSize={this.pageSize} country="gr" category="general"/> </Route>
        <Route exact path="/hk"><News setProgress={this.setProgress}  key = "hk"  pageSize={this.pageSize} country="hk" category="general"/> </Route>
        <Route exact path="/hu"><News setProgress={this.setProgress}  key = "hu"  pageSize={this.pageSize} country="hu" category="general"/> </Route>
        <Route exact path="/id"><News setProgress={this.setProgress}  key = "id"  pageSize={this.pageSize} country="id" category="general"/> </Route>
        <Route exact path="/ie"><News setProgress={this.setProgress}  key = "ie"  pageSize={this.pageSize} country="ie" category="general"/> </Route>
        <Route exact path="/il"><News setProgress={this.setProgress}  key = "il"  pageSize={this.pageSize} country="il" category="general"/> </Route>
        <Route exact path="/it"><News setProgress={this.setProgress}  key = "it"  pageSize={this.pageSize} country="it" category="general"/> </Route>
        <Route exact path="/jp"><News setProgress={this.setProgress}  key = "jp"  pageSize={this.pageSize} country="jp" category="general"/> </Route>
        <Route exact path="/kr"><News setProgress={this.setProgress}  key = "kr"  pageSize={this.pageSize} country="kr" category="general"/> </Route>
        <Route exact path="/lt"><News setProgress={this.setProgress}  key = "lt"  pageSize={this.pageSize} country="lt" category="general"/> </Route>
        <Route exact path="/lv"><News setProgress={this.setProgress}  key = "lv"  pageSize={this.pageSize} country="lv" category="general"/> </Route>
        <Route exact path="/ma"><News setProgress={this.setProgress}  key = "ma"  pageSize={this.pageSize} country="ma" category="general"/> </Route>
        <Route exact path="/mx"><News setProgress={this.setProgress}  key = "mx"  pageSize={this.pageSize} country="mx" category="general"/> </Route>
        <Route exact path="/my"><News setProgress={this.setProgress}  key = "my"  pageSize={this.pageSize} country="my" category="general"/> </Route>
        <Route exact path="/ng"><News setProgress={this.setProgress}  key = "ng"  pageSize={this.pageSize} country="ng" category="general"/> </Route>
        <Route exact path="/nl"><News setProgress={this.setProgress}  key = "nl"  pageSize={this.pageSize} country="nl" category="general"/> </Route>
        <Route exact path="/no"><News setProgress={this.setProgress}  key = "no"  pageSize={this.pageSize} country="no" category="general"/> </Route>
        <Route exact path="/nz"><News setProgress={this.setProgress}  key = "nz"  pageSize={this.pageSize} country="nz" category="general"/> </Route>
        <Route exact path="/ph"><News setProgress={this.setProgress}  key = "ph"  pageSize={this.pageSize} country="ph" category="general"/> </Route>
        <Route exact path="/pl"><News setProgress={this.setProgress}  key = "pl"  pageSize={this.pageSize} country="pl" category="general"/> </Route>
        <Route exact path="/pt"><News setProgress={this.setProgress}  key = "pt"  pageSize={this.pageSize} country="pt" category="general"/> </Route>
        <Route exact path="/ro"><News setProgress={this.setProgress}  key = "ro"  pageSize={this.pageSize} country="ro" category="general"/> </Route>
        <Route exact path="/rs"><News setProgress={this.setProgress}  key = "rs"  pageSize={this.pageSize} country="rs" category="general"/> </Route>
        <Route exact path="/ru"><News setProgress={this.setProgress}  key = "ru"  pageSize={this.pageSize} country="ru" category="general"/> </Route>
        <Route exact path="/sa"><News setProgress={this.setProgress}  key = "sa"  pageSize={this.pageSize} country="sa" category="general"/> </Route>
        <Route exact path="/se"><News setProgress={this.setProgress}  key = "se"  pageSize={this.pageSize} country="se" category="general"/> </Route>
        <Route exact path="/sg"><News setProgress={this.setProgress}  key = "sg"  pageSize={this.pageSize} country="sg" category="general"/> </Route>
        <Route exact path="/si"><News setProgress={this.setProgress}  key = "si"  pageSize={this.pageSize} country="si" category="general"/> </Route>
        <Route exact path="/sk"><News setProgress={this.setProgress}  key = "sk"  pageSize={this.pageSize} country="sk" category="general"/> </Route>
        <Route exact path="/za"><News setProgress={this.setProgress}  key = "za"  pageSize={this.pageSize} country="za" category="general"/> </Route>
        <Route exact path="/th"><News setProgress={this.setProgress}  key = "th"  pageSize={this.pageSize} country="th" category="general"/> </Route>
        <Route exact path="/tr"><News setProgress={this.setProgress}  key = "tr"  pageSize={this.pageSize} country="tr" category="general"/> </Route>
        <Route exact path="/tw"><News setProgress={this.setProgress}  key = "tw"  pageSize={this.pageSize} country="tw" category="general"/> </Route>
        <Route exact path="/ua"><News setProgress={this.setProgress}  key = "ua"  pageSize={this.pageSize} country="ua" category="general"/> </Route>
        <Route exact path="/ve"><News setProgress={this.setProgress}  key = "ve"  pageSize={this.pageSize} country="ve" category="general"/> </Route>
        {/* <Route exact path="/in"><News setProgress={this.setProgress}  key = "in"  pageSize={this.pageSize} country="in" category="general"/> </Route> */}
        </Switch>
        {/* <Footer /> */}
        </Router>
      </div>
    )
  }
}
