(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(29)},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),s=a.n(r),o=(a(23),a(10)),i=a.n(o),c=a(15),m=a(1),u=a(2),p=a(4),d=a(3),b=a(5),h=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"employee-info"},this.props.id&&l.a.createElement("p",{className:"employee__profilepickey"}," Profile Picture:",l.a.createElement("br",null),l.a.createElement("span",null," ",l.a.createElement("img",{src:this.props.avatar,alt:"profilepic",className:"employee__image"})," ")),this.props.id&&l.a.createElement("span",{className:"employee__idkey"},"ID:",l.a.createElement("span",{className:"employee__idvalue"},"  ",this.props.id)),this.props.first_name&&l.a.createElement("span",{className:"employee__namekey"},"Name:",l.a.createElement("span",{className:"employee__value1"},"  ",this.props.first_name)),this.props.last_name&&l.a.createElement("span",null,l.a.createElement("span",{className:"employee__value1"},"  ",this.props.last_name,l.a.createElement("br",null))),this.props.email&&l.a.createElement("p",{className:"employee__emailkey"},"Email:",l.a.createElement("span",{className:"employee__emailvalue"},"  ",this.props.email)),this.props.error&&l.a.createElement("p",{className:"employee__error"},this.props.error),this.props.reset&&l.a.createElement("p",{className:"employee__reset"},this.props.reset))}}]),t}(l.a.Component),v=a(12),f=a(11),E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={selecteddepartment:null,selectedid:null},a.handleChange=function(e){a.setState({selecteddepartment:e}),console.log("Option selected:",e)},a.handleChange1=function(e){a.setState({selectedid:e}),console.log("Option selected:",e)},a.clearvalues=function(){a.setState({selecteddepartment:"",selectedid:""})},a.onClearForm=function(){window.location.reload()},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.selecteddepartment,t=this.state.selectedid,a={option:function(e,t){return Object(v.a)({},e,{color:t.isSelected?"#FFF":e.color,backgroundColor:t.isSelected?"#c7bdf2":e.color,borderBottom:"1px solid rgba(0, 0, 0, 0.125)","&:hover":{color:"#FFF",backgroundColor:"#c7bdf2"}})},control:function(e,t){return Object(v.a)({},e,{boxShadow:t.isFocused?"0 0 0 0.2rem rgba(120, 194, 173, 0.25)":0,borderColor:t.isFocused?"#bcebeb":"#CED4DA","&:hover":{borderColor:t.isFocused?"#bcebeb":"#CED4DA"}})}};return l.a.createElement("form",{onSubmit:this.props.getDetails,id:"myform",name:"myform"},l.a.createElement("p",{className:"Title"},"Employee Details"),l.a.createElement(f.a,{styles:a,className:"selectbox1",value:e,onChange:this.handleChange,options:[{value:"hr",label:"HR"},{value:"engineer",label:"Engineer"}],name:"department",placeholder:"Select Department",autoFocus:"render"}),"\xa0",l.a.createElement(f.a,{styles:a,className:"selectbox2",value:t,onChange:this.handleChange1,options:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"12",label:"12"}],name:"id",placeholder:"Select Employee ID"}),l.a.createElement("button",{type:"submit",className:"button1"},"Get Details"),"\xa0\xa0 \xa0 \xa0",l.a.createElement("input",{type:"button",name:"cancelCourse",value:"Clear Values",onClick:this.clearvalues,className:"button1"}),"\xa0\xa0 \xa0 \xa0",l.a.createElement("input",{type:"button",name:" onClearForm",value:"Clear Form",onClick:this.onClearForm,className:"button1"}))}}]),t}(l.a.Component),y=a(17),_=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).onSubmit=function(){return new Promise(function(e){setTimeout(e,2e3)})},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(y.a,{onSubmit:this.onSubmit,render:function(e){var t=e.handleSubmit,a=e.submitting,n=e.reset;return l.a.createElement("form",{onSubmit:function(e){var a=t(e);return console.log("RESETING",a),a.then(function(){n()}),a}},l.a.createElement("input",{type:"submit",disabled:a,value:a?"Loading.....":"RESET"}))}}))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={department:void 0,avatar:void 0,id:void 0,first_name:void 0,last_name:void 0,email:void 0,error:void 0},a.getDetails=function(){var e=Object(c.a)(i.a.mark(function e(t){var n,l,r,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.elements.department.value,l=t.target.elements.id.value,t.preventDefault(),e.next=5,fetch("https://reqres.in/api/users/?id=".concat(l));case 5:return r=e.sent,e.next=8,r.json();case 8:s=e.sent,console.log(s),n&&l?a.setState({avatar:s.data.avatar,id:s.data.id,first_name:s.data.first_name,last_name:s.data.last_name,email:s.data.email,error:""}):a.setState({error:"Please input search values..."});case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-5 title-container"}),l.a.createElement("div",{className:"col-xs-7 form-container"},l.a.createElement(E,{getDetails:this.getDetails}),l.a.createElement(_,{onSubmit:this.onSubmit}),l.a.createElement(h,{avatar:this.state.avatar,id:this.state.id,first_name:this.state.first_name,last_name:this.state.last_name,email:this.state.email,error:this.state.error})))))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.93436504.chunk.js.map