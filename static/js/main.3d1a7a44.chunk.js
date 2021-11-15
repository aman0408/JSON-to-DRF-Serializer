(this["webpackJsonpjson-to-drf-serializer"]=this["webpackJsonpjson-to-drf-serializer"]||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){},18:function(e,t,r){},19:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),i=r(7),s=r.n(i),l=(r(14),r(8)),o=(r(15),r(2)),c=r(3),u=r(5),p=r(4),d=(r(16),r(0)),h=function(e){Object(u.a)(r,e);var t=Object(p.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){var e=this,t=this.props.value?Math.min(this.props.value.split("\n").length,this.props.maxLines)+1:Math.min(this.props.placeHolder.split("\n").length,this.props.maxLines)+1,r=[];return this.props.error&&r.push("has-error"),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:this.props.title}),Object(d.jsx)("textarea",{className:r.join(" "),style:{height:20*t+"px"},placeholder:this.props.placeHolder,readOnly:this.props.readOnly,onChange:function(t){e.props.onChange(t,e.props.index)},onKeyDown:function(t){if("Tab"===t.key){t.preventDefault();var r=t.target,n=r.selectionStart,a=r.selectionEnd;t.target.value=t.target.value.substring(0,n)+"\t"+t.target.value.substring(a),e.props.onChange(t,e.props.index)}},value:this.props.value}),Object(d.jsx)("small",{className:"error",children:this.props.error})]})}}]),r}(n.Component),f=function(e){Object(u.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).placeHolder="from rest_framework import serializers\n\nclass NameSerializer(serializers.Serializer):\n\tname = serializers.CharField(required=True)",e}return Object(c.a)(r,[{key:"render",value:function(){return Object(d.jsx)(h,{value:this.props.value,readOnly:!0,title:"DRF Serializer",placeHolder:this.placeHolder,maxLines:80})}}]),r}(n.Component);function v(e,t,r,n){var a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],i="",s=a?"\t":"  ",l=" =";return t.includes("Boolean")?i+=r?s+e+l+t+"()\n":s+e+l+t+"(required=False)\n":(i+=s+e+l+t,i+=n&&!r?"(required=False, allow_null=True)\n":n&&r?"(allow_null=True)\n":n||r?"()\n":"(required=False)\n"),i}var b=function(e){var t=function(e){var t={};for(var r in e)for(var n in e[r])if(n in t)if(t[n].count+=1,typeof e[r][n]===t[n].type)null===e[r][n]&&(t[n].nullable=!0);else{if(null!==e[r][n])return{isPossible:!1,data:"JSON cannot be converted to DRF as '"+n+"' field is of varying types."};t[n].nullable=!0}else t[n]={type:typeof e[r][n],count:1,nullable:!1};return function(e,t){var r=e.length;for(var n in t)t[n].count===r?t[n].required=!0:t[n].required=!1;return{isPossible:!0,data:t}}(e,t)}(e);if(!t.isPossible)return t.data;var r=t.data,n="from rest_framework import serializers\n\nclass ExampleSerializer(serializers.Serializer):\n";for(var a in r){var i=r[a].required,s=r[a].nullable,l="string";"boolean"===r[a].type?l=s?" serializers.NullBooleanField":" serializers.BooleanField":"number"===r[a].type?l=" serializers.IntegerField":"number"===r[a].type?l=" serializers.FloatField":"string"===r[a].type?l=" serializers.CharField":r[a].type===typeof{a:1}?l=" serializers.JSONField":r[a].type===typeof[12,1]&&(l=" serializers.ListField"),n+=v(a,l,i,s)}return n},j=r(9),O=(r(18),function(e){Object(u.a)(r,e);var t=Object(p.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){return Object(d.jsx)("button",{style:Object(j.a)({},this.props.style),onClick:this.props.onClick,disabled:this.props.disabled,children:this.props.title})}}]),r}(n.Component)),m=function(e){Object(u.a)(r,e);var t=Object(p.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).placeHolder='{\n\t"name": "John Doe"\n}',n.initialInput={value:"",error:""},n.maxInputCount=5,n.onJSONInputChange=function(e,t){var r=n.state.inputs,a=e.target.value,i={value:a,error:""};a.replace("\n",""),a.replace("\t",""),n.setState({inputs:r});try{JSON.parse(a)}catch(s){i.error="Invalid JSON"}r[t]=i,n.setState({inputs:r})},n.addJSONInput=function(){var e=n.state.inputs;e.length>=n.maxInputCount||(e.push(n.initialInput),n.setState({inputs:e}))},n.serialize=function(){var e=n.perpareData();if(void 0!==e){var t=b(e);n.props.onSerializeCallback(t)}},n.perpareData=function(){for(var e=[],t=0;t<n.state.inputs.length;++t)try{var r=JSON.parse(n.state.inputs[t].value);e.push(r)}catch(a){return}return e},n.state={inputs:[{value:"",error:""}]},n}return Object(c.a)(r,[{key:"render",value:function(){var e=this;return Object(d.jsxs)(d.Fragment,{children:[this.state.inputs.map((function(t,r){return Object(d.jsx)(h,{value:t.value,placeHolder:e.placeHolder,error:t.error,index:r,title:"Sample JSON #".concat(r+1),onChange:e.onJSONInputChange,maxLines:20},r)})),Object(d.jsx)(O,{style:{marginTop:10},onClick:this.addJSONInput,title:" + Add Another JSON",disabled:this.state.inputs.length>=this.maxInputCount}),Object(d.jsx)(O,{style:{marginTop:10,float:"right"},title:"To Serializer",onClick:this.serialize})]})}}]),r}(n.Component);var g=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),r=t[0],a=t[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col col-half col-fs",style:{borderRight:"1px solid #5C5C5C"},children:Object(d.jsx)(m,{onSerializeCallback:function(e){a(e)}})}),Object(d.jsx)("div",{className:"col col-half col-fs",children:Object(d.jsx)(f,{value:r})})]})})},y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,20)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),y()}},[[19,1,2]]]);
//# sourceMappingURL=main.3d1a7a44.chunk.js.map