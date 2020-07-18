import {withRouter} from "react-router-dom";
import React, {Component} from 'react'
import "./index.less";
import wdphImg from "../../image/002.png";
import lsphImg from "../../image/003.png";
import dqphImg from "../../image/004.png";
import wdddImg from "../../image/005.png";
import dqddImg from "../../image/006.png";
import lsddImg from "../../image/007.png";
import dwpzImg from "../../image/008.png";
import tcdlImg from "../../image/009.png";
import $ from 'jquery';

class Home extends Component{
    state={homeState:[],menuTreeNode:[]}

    componentDidMount() {
        $("html").css("background-color","#154E6C");
        this.initNavListDiv();
    }
    initNavListDiv=()=>{
        let nldw=$("#nav_list_div").css("width");
        nldw=nldw.substring(0,nldw.length-2);
        $("#nav_list_div").css("height",nldw*1155/650+"px");
    }
    goPage = (value) => {
        this.props.history.push(`/${value}`)
    }

    render() {
        return(
            <div className="homePage_div">
                <div className="top_div">智能称重管理系统</div>
                <div className="main_div">
                <div className="nav_list_div" id="nav_list_div">
                    <div className="item_div wdph_div" onClick={this.goPage.bind(this,'myNum')}>
                        <img src={wdphImg}/>
                        <div className="text_div">我的排号</div>
                    </div>
                    <div className="item_div lsph_div">
                        <img src={lsphImg}/>
                        <div className="text_div">历史排号</div>
                    </div>
                    <div className="item_div dqph_div">
                        <img src={dqphImg}/>
                        <div className="text_div">当前排号</div>
                    </div>
                    <div className="item_div wddd_div" onClick={this.goPage.bind(this,'bjInfo')}>
                        <img src={wdddImg}/>
                        <div className="text_div">我的订单</div>
                    </div>
                    <div className="item_div dqdd_div" onClick={this.goPage.bind(this,'dataTj')}>
                        <img src={dqddImg}/>
                        <div className="text_div">当前订单</div>
                    </div>
                    <div className="item_div lsdd_div">
                        <img src={lsddImg}/>
                        <div className="text_div">历史订单</div>
                    </div>
                    <div className="item_div dwpz_div" onClick={this.goPage.bind(this,'fixedSet')}>
                        <img src={dwpzImg}/>
                        <div className="text_div">定位配置</div>
                    </div>
                    <div className="item_div tcdl_div" onClick={this.goPage.bind(this,'login')}>
                        <img src={tcdlImg}/>
                        <div className="text_div">退出登录</div>
                    </div>
                </div>
                </div>
                <div className="space_div"></div>
                <div className="bqsy_div">版权所有2018-2020辰麒数维</div>
            </div>
        );
    }
}

export default withRouter(Home)