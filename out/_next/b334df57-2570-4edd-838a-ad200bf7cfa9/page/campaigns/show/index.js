
          window.__NEXT_REGISTER_PAGE('/campaigns/show', function() {
            var comp = module.exports=webpackJsonp([7],{892:function(e,t,r){e.exports=r(893)},893:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(50),u=a(n),s=r(53),l=a(s),o=r(32),i=a(o),d=r(22),c=a(d),f=r(23),m=a(f),p=r(33),h=a(p),v=r(34),b=a(v),g=r(0),y=a(g),w=r(107),C=a(w),E=r(126),_=a(E),M=r(59),k=r(69),q=a(k),x=r(894),S=a(x),G=r(81),R=function(e){function t(){return(0,c.default)(this,t),(0,h.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,b.default)(t,e),(0,m.default)(t,[{key:"renderCards",value:function(){var e=this.props,t=e.balance,r=e.manager,a=e.minimumContribution,n=e.requestsCount,u=e.approversCount,s=[{header:r,meta:"Address of Manager",description:"The manager created this campaign and can create request to withdraw money",style:{overflowWrap:"break-word"}},{header:a,meta:"Minimum Contribution",description:"You must contribute at least this much wei to become a comntributor"},{header:n,meta:"Number of requests",description:"A request treis to withdraw money from the contract. Request must be approved by approvers."},{header:u,meta:"Number of approvers",description:"Number of people who have contributed"},{header:q.default.utils.fromWei(t,"ether"),meta:"Campaign Balance (ether)",description:"The balance is how much money this campaign has left to spend."}];return y.default.createElement(M.Card.Group,{items:s})}},{key:"render",value:function(){return y.default.createElement(C.default,null,y.default.createElement("h3",null,"Campaign show"),y.default.createElement(M.Grid,null,y.default.createElement(M.Grid.Row,null,y.default.createElement(M.Grid.Column,{width:10},this.renderCards()),y.default.createElement(M.Grid.Column,{width:6},y.default.createElement(S.default,{address:this.props.address}))),y.default.createElement(M.Grid.Row,null,y.default.createElement(M.Grid.Column,null,y.default.createElement(G.Link,{route:"/campaigns/"+this.props.address+"/requests"},y.default.createElement("a",null,y.default.createElement(M.Button,{primary:!0},"View Requests")))))))}}],[{key:"getInitialProps",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,l.default)(u.default.mark(function e(t){var r,a;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,_.default)(t.query.address),e.next=3,r.methods.getSummary().call();case 3:return a=e.sent,e.abrupt("return",{address:t.query.address,minimumContribution:a[0],balance:a[1],requestsCount:a[2],approversCount:a[3],manager:a[4]});case 5:case"end":return e.stop()}},e,this)}));return e}()}]),t}(g.Component);t.default=R},894:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(50),u=a(n),s=r(53),l=a(s),o=r(32),i=a(o),d=r(22),c=a(d),f=r(23),m=a(f),p=r(33),h=a(p),v=r(34),b=a(v),g=r(0),y=a(g),w=r(59),C=r(126),E=a(C),_=r(69),M=a(_),k=r(81),q=function(e){function t(){var e,r,a,n,s=this;(0,c.default)(this,t);for(var o=arguments.length,d=Array(o),f=0;f<o;f++)d[f]=arguments[f];return r=a=(0,h.default)(this,(e=t.__proto__||(0,i.default)(t)).call.apply(e,[this].concat(d))),a.state={value:"",errorMessage:"",loading:!1},a.onSubmit=function(){var e=(0,l.default)(u.default.mark(function e(t){var r,n;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=(0,E.default)(a.props.address),a.setState({loading:!0,errorMessage:""}),e.prev=3,e.next=6,M.default.eth.getAccounts();case 6:return n=e.sent,e.next=9,r.methods.contribute().send({from:n[0],calue:M.default.utils.toWei(a.state.value,"ether")});case 9:k.Router.replaceRoute("/campaigns/"+a.props.address),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),a.setState({errorMessage:e.t0.message});case 15:a.setState({loading:!1,value:""});case 16:case"end":return e.stop()}},e,s,[[3,12]])}));return function(t){return e.apply(this,arguments)}}(),n=r,(0,h.default)(a,n)}return(0,b.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){var e=this;return y.default.createElement(w.Form,{onSubmit:this.onSubmit,error:!!this.state.errorMessage},y.default.createElement(w.Form.Field,null,y.default.createElement("label",null,"Amount to contribute"),y.default.createElement(w.Input,{value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})},label:"ether",labelPosition:"right"})),y.default.createElement(w.Message,{error:!0,header:"Oops!",content:this.state.errorMessage}),y.default.createElement(w.Button,{primary:!0,loading:this.state.loading},"Contribute"))}}]),t}(g.Component);t.default=q}},[892]);
            return { page: comp.default }
          })
        