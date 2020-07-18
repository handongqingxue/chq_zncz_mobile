import {withRouter} from "react-router-dom";
import React, {Component} from 'react'
import $ from "jquery";
import Super from "../../super";

class MyNum extends Component {
    state={menuId:104809505890330,
        myNumColumnsId:{},
        myNumList:[],
        序号字段:"序号",
        号码字段:"号码",
        排队号字段:"排队号",
        排入时间字段:"排入时间",
        分类字段:"分类",
        状态字段:"状态",
    }

    componentDidMount(){
        $("html").css("background-color","#fff");
        this.request();
    }
    request=()=>{
        this.initLtmplAttr();
    }
    initLtmplAttr=()=>{
        Super.super({
            url:`api2/entity/${this.state.menuId}/list/tmpl`,
            method:'GET',
        }).then((res) => {
            let resColumns=res.ltmpl.columns;
            this.initMyNumColumnsId(resColumns);
            this.initListByMenuId();
        });
    }
    initMyNumColumnsId=(resColumns)=>{
        let myNumColumnsId = {};
        resColumns.map((item, index) => {
            //console.log(item.title+",==="+item.id)
            myNumColumnsId[item.title] = item.id;
        });
        console.log(myNumColumnsId)
        this.setState({myNumColumnsId: myNumColumnsId});
    }
    initListByMenuId=()=>{
        Super.super({
            url:`api2/entity/${this.state.menuId}/list/tmpl`,
            method:'GET',
            //query:query
        }).then((res) => {
            console.log(res);
            this.initListByQueryKey(res.queryKey);
        })
    }
    initListByQueryKey=(queryKey)=>{
        Super.super({
            url:`api2/entity/list/${queryKey}/data`,
            method:'GET',
            query:{pageSize:100}
        }).then((res) => {
            console.log("==="+JSON.stringify(res));
            this.setState({myNumList:res.entities});
        })
    }

    render() {
        const {myNumList,myNumColumnsId,
            序号字段, 号码字段, 排队号字段, 排入时间字段,分类字段,状态字段
        }=this.state
        return <div>
            <div>
                {
                    myNumList?myNumList.map((item,index)=>
                        <div>
                            <div>{号码字段}:{item.cellMap[myNumColumnsId[号码字段]]}</div>
                            <div>{排队号字段}:{item.cellMap[myNumColumnsId[排队号字段]]}</div>
                            <div>{排入时间字段}:{item.cellMap[myNumColumnsId[排入时间字段]]}</div>
                            <div>{分类字段}:{item.cellMap[myNumColumnsId[分类字段]]}</div>
                            <div>{状态字段}:{item.cellMap[myNumColumnsId[状态字段]]}</div>
                        </div>
                    ):<div>暂无数据</div>
                }
            </div>
        </div>;
    }
}

export default withRouter(MyNum)