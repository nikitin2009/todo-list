!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=160)}([function(e,t,n){var r=n(58),o=n(13),a=36e5,u=6e4,i=2,s=/[T ]/,c=/:/,f=/^(\d{2})$/,l=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],d=/^(\d{4})/,p=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],v=/^-(\d{2})$/,m=/^-?(\d{3})$/,g=/^-?(\d{2})-?(\d{2})$/,h=/^-?W(\d{2})$/,D=/^-?W(\d{2})-?(\d{1})$/,x=/^(\d{2}([.,]\d*)?)$/,T=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,M=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,y=/([Z+-].*)$/,b=/^(Z)$/,S=/^([+-])(\d{2})$/,Y=/^([+-])(\d{2}):?(\d{2})$/;function w(e,t,n){t=t||0,n=n||0;var r=new Date(0);r.setUTCFullYear(e,0,4);var o=7*t+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+o),r}e.exports=function(e,t){if(o(e))return new Date(e.getTime());if("string"!=typeof e)return new Date(e);var n=(t||{}).additionalDigits;n=null==n?i:Number(n);var O=function(e){var t,n={},r=e.split(s);if(c.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1]),t){var o=y.exec(t);o?(n.time=t.replace(o[1],""),n.timezone=o[1]):n.time=t}return n}(e),I=function(e,t){var n,r=l[t],o=p[t];if(n=d.exec(e)||o.exec(e)){var a=n[1];return{year:parseInt(a,10),restDateString:e.slice(a.length)}}if(n=f.exec(e)||r.exec(e)){var u=n[1];return{year:100*parseInt(u,10),restDateString:e.slice(u.length)}}return{year:null}}(O.date,n),H=I.year,F=function(e,t){if(null===t)return null;var n,r,o,a;if(0===e.length)return(r=new Date(0)).setUTCFullYear(t),r;if(n=v.exec(e))return r=new Date(0),o=parseInt(n[1],10)-1,r.setUTCFullYear(t,o),r;if(n=m.exec(e)){r=new Date(0);var u=parseInt(n[1],10);return r.setUTCFullYear(t,0,u),r}if(n=g.exec(e)){r=new Date(0),o=parseInt(n[1],10)-1;var i=parseInt(n[2],10);return r.setUTCFullYear(t,o,i),r}if(n=h.exec(e))return a=parseInt(n[1],10)-1,w(t,a);if(n=D.exec(e)){a=parseInt(n[1],10)-1;var s=parseInt(n[2],10)-1;return w(t,a,s)}return null}(I.restDateString,H);if(F){var j,L=F.getTime(),k=0;if(O.time&&(k=function(e){var t,n,r;if(t=x.exec(e))return(n=parseFloat(t[1].replace(",",".")))%24*a;if(t=T.exec(e))return n=parseInt(t[1],10),r=parseFloat(t[2].replace(",",".")),n%24*a+r*u;if(t=M.exec(e)){n=parseInt(t[1],10),r=parseInt(t[2],10);var o=parseFloat(t[3].replace(",","."));return n%24*a+r*u+1e3*o}return null}(O.time)),O.timezone)A=O.timezone,j=(($=b.exec(A))?0:($=S.exec(A))?(z=60*parseInt($[2],10),"+"===$[1]?-z:z):($=Y.exec(A))?(z=60*parseInt($[2],10)+parseInt($[3],10),"+"===$[1]?-z:z):0)*u;else{var E=L+k,N=new Date(E);j=r(N);var W=new Date(E);W.setDate(N.getDate()+1);var P=r(W)-r(N);P>0&&(j+=P)}return new Date(L+k+j)}var A,$,z;return new Date(e)}},function(e,t,n){var r=n(0),o=n(2);e.exports=function(e){var t=r(e),n=t.getFullYear(),a=new Date(0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);var u=o(a),i=new Date(0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);var s=o(i);return t.getTime()>=u.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}},function(e,t,n){var r=n(8);e.exports=function(e){return r(e,{weekStartsOn:1})}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setDate(n.getDate()+o),n}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e).getTime(),o=Number(t);return new Date(n+o)}},function(e,t,n){var r=n(1),o=n(2);e.exports=function(e){var t=r(e),n=new Date(0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),o(n)}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e).getTime(),o=r(t).getTime();return n<o?-1:n>o?1:0}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=t&&Number(t.weekStartsOn)||0,o=r(e),a=o.getDay(),u=(a<n?7:0)+a-n;return o.setDate(o.getDate()-u),o.setHours(0,0,0,0),o}},function(e,t,n){var r=n(3),o=6e4,a=864e5;e.exports=function(e,t){var n=r(e),u=r(t),i=n.getTime()-n.getTimezoneOffset()*o,s=u.getTime()-u.getTimezoneOffset()*o;return Math.round((i-s)/a)}},function(e,t,n){var r=n(0),o=n(14);e.exports=function(e,t){var n=r(e),a=Number(t),u=n.getMonth()+a,i=new Date(0);i.setFullYear(n.getFullYear(),u,1),i.setHours(0,0,0,0);var s=o(i);return n.setMonth(u,Math.min(s,n.getDate())),n}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()-o.getTime()}},function(e,t,n){e.exports={addDays:n(4),addHours:n(23),addISOYears:n(24),addMilliseconds:n(5),addMinutes:n(26),addMonths:n(10),addQuarters:n(27),addSeconds:n(28),addWeeks:n(15),addYears:n(29),areRangesOverlapping:n(59),closestIndexTo:n(60),closestTo:n(61),compareAsc:n(7),compareDesc:n(16),differenceInCalendarDays:n(9),differenceInCalendarISOWeeks:n(62),differenceInCalendarISOYears:n(30),differenceInCalendarMonths:n(31),differenceInCalendarQuarters:n(63),differenceInCalendarWeeks:n(64),differenceInCalendarYears:n(33),differenceInDays:n(34),differenceInHours:n(65),differenceInISOYears:n(66),differenceInMilliseconds:n(11),differenceInMinutes:n(67),differenceInMonths:n(17),differenceInQuarters:n(68),differenceInSeconds:n(18),differenceInWeeks:n(69),differenceInYears:n(70),distanceInWords:n(36),distanceInWordsStrict:n(74),distanceInWordsToNow:n(75),eachDay:n(76),endOfDay:n(20),endOfHour:n(77),endOfISOWeek:n(78),endOfISOYear:n(79),endOfMinute:n(80),endOfMonth:n(38),endOfQuarter:n(81),endOfSecond:n(82),endOfToday:n(83),endOfTomorrow:n(84),endOfWeek:n(37),endOfYear:n(85),endOfYesterday:n(86),format:n(87),getDate:n(88),getDay:n(89),getDayOfYear:n(39),getDaysInMonth:n(14),getDaysInYear:n(90),getHours:n(91),getISODay:n(43),getISOWeek:n(21),getISOWeeksInYear:n(92),getISOYear:n(1),getMilliseconds:n(93),getMinutes:n(94),getMonth:n(95),getOverlappingDaysInRanges:n(96),getQuarter:n(32),getSeconds:n(97),getTime:n(98),getYear:n(99),isAfter:n(100),isBefore:n(101),isDate:n(13),isEqual:n(102),isFirstDayOfMonth:n(103),isFriday:n(104),isFuture:n(105),isLastDayOfMonth:n(106),isLeapYear:n(42),isMonday:n(107),isPast:n(108),isSameDay:n(109),isSameHour:n(44),isSameISOWeek:n(46),isSameISOYear:n(47),isSameMinute:n(48),isSameMonth:n(50),isSameQuarter:n(51),isSameSecond:n(53),isSameWeek:n(22),isSameYear:n(55),isSaturday:n(110),isSunday:n(111),isThisHour:n(112),isThisISOWeek:n(113),isThisISOYear:n(114),isThisMinute:n(115),isThisMonth:n(116),isThisQuarter:n(117),isThisSecond:n(118),isThisWeek:n(119),isThisYear:n(120),isThursday:n(121),isToday:n(122),isTomorrow:n(123),isTuesday:n(124),isValid:n(41),isWednesday:n(125),isWeekend:n(126),isWithinRange:n(127),isYesterday:n(128),lastDayOfISOWeek:n(129),lastDayOfISOYear:n(130),lastDayOfMonth:n(131),lastDayOfQuarter:n(132),lastDayOfWeek:n(56),lastDayOfYear:n(133),max:n(134),min:n(135),parse:n(0),setDate:n(136),setDay:n(137),setDayOfYear:n(138),setHours:n(139),setISODay:n(140),setISOWeek:n(141),setISOYear:n(25),setMilliseconds:n(142),setMinutes:n(143),setMonth:n(57),setQuarter:n(144),setSeconds:n(145),setYear:n(146),startOfDay:n(3),startOfHour:n(45),startOfISOWeek:n(2),startOfISOYear:n(6),startOfMinute:n(49),startOfMonth:n(147),startOfQuarter:n(52),startOfSecond:n(54),startOfToday:n(148),startOfTomorrow:n(149),startOfWeek:n(8),startOfYear:n(40),startOfYesterday:n(150),subDays:n(151),subHours:n(152),subISOYears:n(35),subMilliseconds:n(153),subMinutes:n(154),subMonths:n(155),subQuarters:n(156),subSeconds:n(157),subWeeks:n(158),subYears:n(159)}},function(e,t){e.exports=function(e){return e instanceof Date}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getFullYear(),o=t.getMonth(),a=new Date(0);return a.setFullYear(n,o+1,0),a.setHours(0,0,0,0),a.getDate()}},function(e,t,n){var r=n(4);e.exports=function(e,t){var n=Number(t);return r(e,7*n)}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e).getTime(),o=r(t).getTime();return n>o?-1:n<o?1:0}},function(e,t,n){var r=n(0),o=n(31),a=n(7);e.exports=function(e,t){var n=r(e),u=r(t),i=a(n,u),s=Math.abs(o(n,u));return n.setMonth(n.getMonth()-i*s),i*(s-(a(n,u)===-i))}},function(e,t,n){var r=n(11);e.exports=function(e,t){var n=r(e,t)/1e3;return n>0?Math.floor(n):Math.ceil(n)}},function(e,t,n){var r=n(71),o=n(72);e.exports={distanceInWords:r(),format:o()}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setHours(23,59,59,999),t}},function(e,t,n){var r=n(0),o=n(2),a=n(6),u=6048e5;e.exports=function(e){var t=r(e),n=o(t).getTime()-a(t).getTime();return Math.round(n/u)+1}},function(e,t,n){var r=n(8);e.exports=function(e,t,n){var o=r(e,n),a=r(t,n);return o.getTime()===a.getTime()}},function(e,t,n){var r=n(5),o=36e5;e.exports=function(e,t){var n=Number(t);return r(e,n*o)}},function(e,t,n){var r=n(1),o=n(25);e.exports=function(e,t){var n=Number(t);return o(e,r(e)+n)}},function(e,t,n){var r=n(0),o=n(6),a=n(9);e.exports=function(e,t){var n=r(e),u=Number(t),i=a(n,o(n)),s=new Date(0);return s.setFullYear(u,0,4),s.setHours(0,0,0,0),(n=o(s)).setDate(n.getDate()+i),n}},function(e,t,n){var r=n(5),o=6e4;e.exports=function(e,t){var n=Number(t);return r(e,n*o)}},function(e,t,n){var r=n(10);e.exports=function(e,t){var n=Number(t);return r(e,3*n)}},function(e,t,n){var r=n(5);e.exports=function(e,t){var n=Number(t);return r(e,1e3*n)}},function(e,t,n){var r=n(10);e.exports=function(e,t){var n=Number(t);return r(e,12*n)}},function(e,t,n){var r=n(1);e.exports=function(e,t){return r(e)-r(t)}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return 12*(n.getFullYear()-o.getFullYear())+(n.getMonth()-o.getMonth())}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return Math.floor(t.getMonth()/3)+1}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return n.getFullYear()-o.getFullYear()}},function(e,t,n){var r=n(0),o=n(9),a=n(7);e.exports=function(e,t){var n=r(e),u=r(t),i=a(n,u),s=Math.abs(o(n,u));return n.setDate(n.getDate()-i*s),i*(s-(a(n,u)===-i))}},function(e,t,n){var r=n(24);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(16),o=n(0),a=n(18),u=n(17),i=n(19),s=1440,c=2520,f=43200,l=86400;e.exports=function(e,t,n){var d=n||{},p=r(e,t),v=d.locale,m=i.distanceInWords.localize;v&&v.distanceInWords&&v.distanceInWords.localize&&(m=v.distanceInWords.localize);var g,h,D={addSuffix:Boolean(d.addSuffix),comparison:p};p>0?(g=o(e),h=o(t)):(g=o(t),h=o(e));var x,T=a(h,g),M=h.getTimezoneOffset()-g.getTimezoneOffset(),y=Math.round(T/60)-M;if(y<2)return d.includeSeconds?T<5?m("lessThanXSeconds",5,D):T<10?m("lessThanXSeconds",10,D):T<20?m("lessThanXSeconds",20,D):T<40?m("halfAMinute",null,D):m(T<60?"lessThanXMinutes":"xMinutes",1,D):0===y?m("lessThanXMinutes",1,D):m("xMinutes",y,D);if(y<45)return m("xMinutes",y,D);if(y<90)return m("aboutXHours",1,D);if(y<s)return m("aboutXHours",Math.round(y/60),D);if(y<c)return m("xDays",1,D);if(y<f)return m("xDays",Math.round(y/s),D);if(y<l)return m("aboutXMonths",x=Math.round(y/f),D);if((x=u(h,g))<12)return m("xMonths",Math.round(y/f),D);var b=x%12,S=Math.floor(x/12);return b<3?m("aboutXYears",S,D):b<9?m("overXYears",S,D):m("almostXYears",S+1,D)}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=t&&Number(t.weekStartsOn)||0,o=r(e),a=o.getDay(),u=6+(a<n?-7:0)-(a-n);return o.setDate(o.getDate()+u),o.setHours(23,59,59,999),o}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}},function(e,t,n){var r=n(0),o=n(40),a=n(9);e.exports=function(e){var t=r(e);return a(t,o(t))+1}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=new Date(0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}},function(e,t,n){var r=n(13);e.exports=function(e){if(r(e))return!isNaN(e);throw new TypeError(toString.call(e)+" is not an instance of Date")}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e).getFullYear();return t%400==0||t%4==0&&t%100!=0}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e).getDay();return 0===t&&(t=7),t}},function(e,t,n){var r=n(45);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setMinutes(0,0,0),t}},function(e,t,n){var r=n(22);e.exports=function(e,t){return r(e,t,{weekStartsOn:1})}},function(e,t,n){var r=n(6);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(49);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setSeconds(0,0),t}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return n.getFullYear()===o.getFullYear()&&n.getMonth()===o.getMonth()}},function(e,t,n){var r=n(52);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getMonth(),o=n-n%3;return t.setMonth(o,1),t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(54);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setMilliseconds(0),t}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return n.getFullYear()===o.getFullYear()}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=t&&Number(t.weekStartsOn)||0,o=r(e),a=o.getDay(),u=6+(a<n?-7:0)-(a-n);return o.setHours(0,0,0,0),o.setDate(o.getDate()+u),o}},function(e,t,n){var r=n(0),o=n(14);e.exports=function(e,t){var n=r(e),a=Number(t),u=n.getFullYear(),i=n.getDate(),s=new Date(0);s.setFullYear(u,a,15),s.setHours(0,0,0,0);var c=o(s);return n.setMonth(a,Math.min(i,c)),n}},function(e,t){e.exports=function(e){var t=new Date(e.getTime()),n=t.getTimezoneOffset();return t.setSeconds(0,0),6e4*n+t.getTime()%6e4}},function(e,t,n){var r=n(0);e.exports=function(e,t,n,o){var a=r(e).getTime(),u=r(t).getTime(),i=r(n).getTime(),s=r(o).getTime();if(a>u||i>s)throw new Error("The start of the range cannot be after the end of the range");return a<s&&i<u}},function(e,t,n){var r=n(0);e.exports=function(e,t){if(!(t instanceof Array))throw new TypeError(toString.call(t)+" is not an instance of Array");var n,o,a=r(e).getTime();return t.forEach(function(e,t){var u=r(e),i=Math.abs(a-u.getTime());(void 0===n||i<o)&&(n=t,o=i)}),n}},function(e,t,n){var r=n(0);e.exports=function(e,t){if(!(t instanceof Array))throw new TypeError(toString.call(t)+" is not an instance of Array");var n,o,a=r(e).getTime();return t.forEach(function(e){var t=r(e),u=Math.abs(a-t.getTime());(void 0===n||u<o)&&(n=t,o=u)}),n}},function(e,t,n){var r=n(2),o=6e4,a=6048e5;e.exports=function(e,t){var n=r(e),u=r(t),i=n.getTime()-n.getTimezoneOffset()*o,s=u.getTime()-u.getTimezoneOffset()*o;return Math.round((i-s)/a)}},function(e,t,n){var r=n(32),o=n(0);e.exports=function(e,t){var n=o(e),a=o(t);return 4*(n.getFullYear()-a.getFullYear())+(r(n)-r(a))}},function(e,t,n){var r=n(8),o=6e4,a=6048e5;e.exports=function(e,t,n){var u=r(e,n),i=r(t,n),s=u.getTime()-u.getTimezoneOffset()*o,c=i.getTime()-i.getTimezoneOffset()*o;return Math.round((s-c)/a)}},function(e,t,n){var r=n(11),o=36e5;e.exports=function(e,t){var n=r(e,t)/o;return n>0?Math.floor(n):Math.ceil(n)}},function(e,t,n){var r=n(0),o=n(30),a=n(7),u=n(35);e.exports=function(e,t){var n=r(e),i=r(t),s=a(n,i),c=Math.abs(o(n,i));return n=u(n,s*c),s*(c-(a(n,i)===-s))}},function(e,t,n){var r=n(11),o=6e4;e.exports=function(e,t){var n=r(e,t)/o;return n>0?Math.floor(n):Math.ceil(n)}},function(e,t,n){var r=n(17);e.exports=function(e,t){var n=r(e,t)/3;return n>0?Math.floor(n):Math.ceil(n)}},function(e,t,n){var r=n(34);e.exports=function(e,t){var n=r(e,t)/7;return n>0?Math.floor(n):Math.ceil(n)}},function(e,t,n){var r=n(0),o=n(33),a=n(7);e.exports=function(e,t){var n=r(e),u=r(t),i=a(n,u),s=Math.abs(o(n,u));return n.setFullYear(n.getFullYear()-i*s),i*(s-(a(n,u)===-i))}},function(e,t){e.exports=function(){var e={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:function(t,n,r){var o;return r=r||{},o="string"==typeof e[t]?e[t]:1===n?e[t].one:e[t].other.replace("{{count}}",n),r.addSuffix?r.comparison>0?"in "+o:o+" ago":o}}}},function(e,t,n){var r=n(73);e.exports=function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Su","Mo","Tu","We","Th","Fr","Sa"],o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],u=["AM","PM"],i=["am","pm"],s=["a.m.","p.m."],c={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return n[e.getDay()]},ddd:function(e){return o[e.getDay()]},dddd:function(e){return a[e.getDay()]},A:function(e){return e.getHours()/12>=1?u[1]:u[0]},a:function(e){return e.getHours()/12>=1?i[1]:i[0]},aa:function(e){return e.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach(function(e){c[e+"o"]=function(t,n){return function(e){var t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"}(n[e](t))}}),{formatters:c,formattingTokensRegExp:r(c)}}},function(e,t){var n=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];e.exports=function(e){var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(r);var o=n.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},function(e,t,n){var r=n(16),o=n(0),a=n(18),u=n(19),i=1440,s=43200,c=525600;e.exports=function(e,t,n){var f=n||{},l=r(e,t),d=f.locale,p=u.distanceInWords.localize;d&&d.distanceInWords&&d.distanceInWords.localize&&(p=d.distanceInWords.localize);var v,m,g,h={addSuffix:Boolean(f.addSuffix),comparison:l};l>0?(v=o(e),m=o(t)):(v=o(t),m=o(e));var D=Math[f.partialMethod?String(f.partialMethod):"floor"],x=a(m,v),T=m.getTimezoneOffset()-v.getTimezoneOffset(),M=D(x/60)-T;if("s"===(g=f.unit?String(f.unit):M<1?"s":M<60?"m":M<i?"h":M<s?"d":M<c?"M":"Y"))return p("xSeconds",x,h);if("m"===g)return p("xMinutes",M,h);if("h"===g)return p("xHours",D(M/60),h);if("d"===g)return p("xDays",D(M/i),h);if("M"===g)return p("xMonths",D(M/s),h);if("Y"===g)return p("xYears",D(M/c),h);throw new Error("Unknown unit: "+g)}},function(e,t,n){var r=n(36);e.exports=function(e,t){return r(Date.now(),e,t)}},function(e,t,n){var r=n(0);e.exports=function(e,t,n){var o=r(e),a=void 0!==n?n:1,u=r(t).getTime();if(o.getTime()>u)throw new Error("The first date cannot be after the second date");var i=[],s=o;for(s.setHours(0,0,0,0);s.getTime()<=u;)i.push(r(s)),s.setDate(s.getDate()+a);return i}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setMinutes(59,59,999),t}},function(e,t,n){var r=n(37);e.exports=function(e){return r(e,{weekStartsOn:1})}},function(e,t,n){var r=n(1),o=n(2);e.exports=function(e){var t=r(e),n=new Date(0);n.setFullYear(t+1,0,4),n.setHours(0,0,0,0);var a=o(n);return a.setMilliseconds(a.getMilliseconds()-1),a}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setSeconds(59,999),t}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getMonth(),o=n-n%3+3;return t.setMonth(o,0),t.setHours(23,59,59,999),t}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setMilliseconds(999),t}},function(e,t,n){var r=n(20);e.exports=function(){return r(new Date)}},function(e,t){e.exports=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),o=new Date(0);return o.setFullYear(t,n,r+1),o.setHours(23,59,59,999),o}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getFullYear();return t.setFullYear(n+1,0,0),t.setHours(23,59,59,999),t}},function(e,t){e.exports=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),o=new Date(0);return o.setFullYear(t,n,r-1),o.setHours(23,59,59,999),o}},function(e,t,n){var r=n(39),o=n(21),a=n(1),u=n(0),i=n(41),s=n(19);var c={M:function(e){return e.getMonth()+1},MM:function(e){return l(e.getMonth()+1,2)},Q:function(e){return Math.ceil((e.getMonth()+1)/3)},D:function(e){return e.getDate()},DD:function(e){return l(e.getDate(),2)},DDD:function(e){return r(e)},DDDD:function(e){return l(r(e),3)},d:function(e){return e.getDay()},E:function(e){return e.getDay()||7},W:function(e){return o(e)},WW:function(e){return l(o(e),2)},YY:function(e){return l(e.getFullYear(),4).substr(2)},YYYY:function(e){return l(e.getFullYear(),4)},GG:function(e){return String(a(e)).substr(2)},GGGG:function(e){return a(e)},H:function(e){return e.getHours()},HH:function(e){return l(e.getHours(),2)},h:function(e){var t=e.getHours();return 0===t?12:t>12?t%12:t},hh:function(e){return l(c.h(e),2)},m:function(e){return e.getMinutes()},mm:function(e){return l(e.getMinutes(),2)},s:function(e){return e.getSeconds()},ss:function(e){return l(e.getSeconds(),2)},S:function(e){return Math.floor(e.getMilliseconds()/100)},SS:function(e){return l(Math.floor(e.getMilliseconds()/10),2)},SSS:function(e){return l(e.getMilliseconds(),3)},Z:function(e){return f(e.getTimezoneOffset(),":")},ZZ:function(e){return f(e.getTimezoneOffset())},X:function(e){return Math.floor(e.getTime()/1e3)},x:function(e){return e.getTime()}};function f(e,t){t=t||"";var n=e>0?"-":"+",r=Math.abs(e),o=r%60;return n+l(Math.floor(r/60),2)+t+l(o,2)}function l(e,t){for(var n=Math.abs(e).toString();n.length<t;)n="0"+n;return n}e.exports=function(e,t,n){var r=t?String(t):"YYYY-MM-DDTHH:mm:ss.SSSZ",o=(n||{}).locale,a=s.format.formatters,f=s.format.formattingTokensRegExp;o&&o.format&&o.format.formatters&&(a=o.format.formatters,o.format.formattingTokensRegExp&&(f=o.format.formattingTokensRegExp));var l=u(e);return i(l)?function(e,t,n){var r,o,a,u=e.match(n),i=u.length;for(r=0;r<i;r++)o=t[u[r]]||c[u[r]],u[r]=o||((a=u[r]).match(/\[[\s\S]/)?a.replace(/^\[|]$/g,""):a.replace(/\\/g,""));return function(e){for(var t="",n=0;n<i;n++)u[n]instanceof Function?t+=u[n](e,c):t+=u[n];return t}}(r,a,f)(l):"Invalid Date"}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getDate()}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getDay()}},function(e,t,n){var r=n(42);e.exports=function(e){return r(e)?366:365}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getHours()}},function(e,t,n){var r=n(6),o=n(15),a=6048e5;e.exports=function(e){var t=r(e),n=r(o(t,60)).valueOf()-t.valueOf();return Math.round(n/a)}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getMilliseconds()}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getMinutes()}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getMonth()}},function(e,t,n){var r=n(0),o=864e5;e.exports=function(e,t,n,a){var u=r(e).getTime(),i=r(t).getTime(),s=r(n).getTime(),c=r(a).getTime();if(u>i||s>c)throw new Error("The start of the range cannot be after the end of the range");if(!(u<c&&s<i))return 0;var f=(c>i?i:c)-(s<u?u:s);return Math.ceil(f/o)}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getSeconds()}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getFullYear()}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()>o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()<o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){return 1===r(e).getDate()}},function(e,t,n){var r=n(0);e.exports=function(e){return 5===r(e).getDay()}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getTime()>(new Date).getTime()}},function(e,t,n){var r=n(0),o=n(20),a=n(38);e.exports=function(e){var t=r(e);return o(t).getTime()===a(t).getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){return 1===r(e).getDay()}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getTime()<(new Date).getTime()}},function(e,t,n){var r=n(3);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){return 6===r(e).getDay()}},function(e,t,n){var r=n(0);e.exports=function(e){return 0===r(e).getDay()}},function(e,t,n){var r=n(44);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(46);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(47);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(48);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(50);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(51);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(53);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(22);e.exports=function(e,t){return r(new Date,e,t)}},function(e,t,n){var r=n(55);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(0);e.exports=function(e){return 4===r(e).getDay()}},function(e,t,n){var r=n(3);e.exports=function(e){return r(e).getTime()===r(new Date).getTime()}},function(e,t,n){var r=n(3);e.exports=function(e){var t=new Date;return t.setDate(t.getDate()+1),r(e).getTime()===r(t).getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){return 2===r(e).getDay()}},function(e,t,n){var r=n(0);e.exports=function(e){return 3===r(e).getDay()}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e).getDay();return 0===t||6===t}},function(e,t,n){var r=n(0);e.exports=function(e,t,n){var o=r(e).getTime(),a=r(t).getTime(),u=r(n).getTime();if(a>u)throw new Error("The start of the range cannot be after the end of the range");return o>=a&&o<=u}},function(e,t,n){var r=n(3);e.exports=function(e){var t=new Date;return t.setDate(t.getDate()-1),r(e).getTime()===r(t).getTime()}},function(e,t,n){var r=n(56);e.exports=function(e){return r(e,{weekStartsOn:1})}},function(e,t,n){var r=n(1),o=n(2);e.exports=function(e){var t=r(e),n=new Date(0);n.setFullYear(t+1,0,4),n.setHours(0,0,0,0);var a=o(n);return a.setDate(a.getDate()-1),a}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getMonth(),o=n-n%3+3;return t.setMonth(o,0),t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getFullYear();return t.setFullYear(n+1,0,0),t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(0);e.exports=function(){var e=Array.prototype.slice.call(arguments).map(function(e){return r(e)}),t=Math.max.apply(null,e);return new Date(t)}},function(e,t,n){var r=n(0);e.exports=function(){var e=Array.prototype.slice.call(arguments).map(function(e){return r(e)}),t=Math.min.apply(null,e);return new Date(t)}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setDate(o),n}},function(e,t,n){var r=n(0),o=n(4);e.exports=function(e,t,n){var a=n&&Number(n.weekStartsOn)||0,u=r(e),i=Number(t),s=u.getDay();return o(u,((i%7+7)%7<a?7:0)+i-s)}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setMonth(0),n.setDate(o),n}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setHours(o),n}},function(e,t,n){var r=n(0),o=n(4),a=n(43);e.exports=function(e,t){var n=r(e),u=Number(t),i=a(n);return o(n,u-i)}},function(e,t,n){var r=n(0),o=n(21);e.exports=function(e,t){var n=r(e),a=Number(t),u=o(n)-a;return n.setDate(n.getDate()-7*u),n}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setMilliseconds(o),n}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setMinutes(o),n}},function(e,t,n){var r=n(0),o=n(57);e.exports=function(e,t){var n=r(e),a=Number(t)-(Math.floor(n.getMonth()/3)+1);return o(n,n.getMonth()+3*a)}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setSeconds(o),n}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setFullYear(o),n}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setDate(1),t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(3);e.exports=function(){return r(new Date)}},function(e,t){e.exports=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),o=new Date(0);return o.setFullYear(t,n,r+1),o.setHours(0,0,0,0),o}},function(e,t){e.exports=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),o=new Date(0);return o.setFullYear(t,n,r-1),o.setHours(0,0,0,0),o}},function(e,t,n){var r=n(4);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(23);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(5);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(26);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(10);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(27);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(28);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(15);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(29);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){"use strict";n.r(t);var r=n(12);var o=function(){const e=document.getElementById("projectsList"),t=document.getElementById("toDosView"),n=document.getElementById("toDosList"),o=document.getElementById("singleToDoView");function a(t,n,r){const o=document.createElement("a"),a=document.createElement("span");return a.classList.add("badge","badge-danger","badge-pill"),a.innerHTML="&times;",a.title="Remove the project",a.addEventListener("click",r),o.href="#",o.dataset.projectId=t.id,o.innerText=t.title,o.append(a),o.classList.add("list-group-item","list-group-item-action","list-group-item-secondary","d-flex","justify-content-between","align-items-center"),o.addEventListener("click",n),e.append(o),o}function u(e,t){const r=n.querySelector(`[data-to-do-id="${e.id}"]`),o=r.parentElement.querySelector(".active");o&&o.classList.remove("active"),r.classList.add("active"),i(e,t)}function i(e,t){const n=document.createElement("button"),a=document.createElement("div"),u=document.createElement("form"),i=document.createElement("button"),s=document.createElement("button"),c=document.createElement("div"),f="low"==e.priority,l="regular"==e.priority,d="high"==e.priority;n.classList.add("btn"),e.completed?(n.classList.add("btn-secondary"),n.innerHTML="Restore"):(n.classList.add("btn-success"),n.innerHTML="Complete &#10003;"),n.addEventListener("click",t.completeButtonHandler),a.classList.add("text-right","mb-3"),a.append(n),u.innerHTML=`\n      <div class="form-group">\n        <label class="sr-only" for="title">Title</label>\n        <input type="text" class="form-control form-control-lg" id="title" name="title" value="${e.title}" required placeholder="Title">\n      </div>\n      <div class="form-group">\n        <label for="description">Description:</label>\n        <textarea class="form-control" id="description" name="description" rows="5">${e.description}</textarea>\n      </div>\n      <div class="form-group">\n        <label for="dueDate">Due on (DD/MM/YYYY):</label>\n        <input type="text" class="form-control form-control-sm" id="dueDate" name="dueDate"\n          value="${Object(r.format)(e.dueDate,"DD/MM/YYYY")}"\n          pattern="^\\d{2}/\\d{2}/\\d{4}$">\n      </div>\n\n      <div class="form-group">\n        <div class="form-check form-check-inline">\n          <input class="form-check-input" type="radio" name="priority" id="low" value="low"\n            ${f?"checked":""}>\n          <label class="form-check-label" for="low">\n            <span class="badge badge-secondary">&nbsp;</span>\n            Low\n          </label>\n        </div>\n        <div class="form-check form-check-inline">\n          <input class="form-check-input" type="radio" name="priority" id="regular" value="regular"\n            ${l?"checked":""}>\n          <label class="form-check-label" for="regular">\n            <span class="badge badge-success">&nbsp;</span>\n            Regular\n          </label>\n        </div>\n        <div class="form-check form-check-inline">\n          <input class="form-check-input" type="radio" name="priority" id="high" value="high"\n            ${d?"checked":""}>\n          <label class="form-check-label" for="high">\n            <span class="badge badge-danger">&nbsp;</span>\n            High\n          </label>\n        </div>\n      </div>\n    `,i.classList.add("btn","btn-danger","float-left"),i.innerHTML="Delete",i.addEventListener("click",t.deleteButtonHandler),s.classList.add("btn","btn-warning","mr-2"),s.innerHTML="Update",s.type="submit",c.classList.add("form-group","text-right"),c.append(s),c.append(i),u.append(c),u.addEventListener("submit",t.editFormSubmitHandler),o.innerHTML="",o.append(a),o.append(u)}return{renderProjects:function(t,n,r){e.innerHTML="",t.forEach(e=>{a(e,n,r)}),e.children[0].classList.add("active")},addProject:a,removeProject:function(e){e.remove()},setActiveProject:function(e){const t=e.parentElement.querySelector(".active");t&&t.classList.remove("active"),e.classList.add("active")},renderToDos:function(e,a,i){const s=document.createElement("h2"),c=document.createElement("a"),f=document.createElement("div");if(s.classList.add("mb-3","px-5"),s.innerText=e.title,c.href="#",c.title="Add new TODO",c.classList.add("h3"),c.innerText="+",f.classList.add("text-center"),f.append(c),t.innerHTML="",n.innerHTML="",t.append(s),t.append(n),t.append(f),e.toDos.forEach(e=>{!function(e,t){const o=document.createElement("a"),a=document.createElement("span"),u=document.createElement("span"),i=document.createElement("span"),s=function(e){let t="";switch(e){case"regular":t="success";break;case"high":t="danger";break;case"low":t="secondary"}return t}(e.priority);a.classList.add("badge",`badge-${s}`),a.innerHTML="&nbsp;",a.title=`Priority: ${e.priority}`,u.classList.add("title","flex-fill","mx-2"),u.innerHTML=e.title,i.innerHTML=`(due on ${Object(r.format)(e.dueDate,"DD/MM/YYYY")})`,i.classList.add("small","due-date"),Object(r.isPast)(e.dueDate)&&i.classList.add("text-danger","font-weight-bold"),o.href="#",o.dataset.toDoId=e.id,o.append(a),o.append(u),o.append(i),o.classList.add("list-group-item","list-group-item-action","d-flex","justify-content-between","align-items-center"),e.completed&&o.classList.add("completed"),o.addEventListener("click",t),n.append(o)}(e,a)}),0===e.toDos.length)return o.innerHTML="",null;n.children[0].classList.add("active"),u(e.toDos[0],i)},setActiveToDo:u,renderSingleToDo:i,emptyScreen:function(){t.innerHTML="",o.innerHTML=""}}}();class a{constructor(e){this.title=e,this.toDos=[],this.id=a.id+ +new Date,a.id++}}a.id=0;class u{constructor({title:e,description:t,dueDate:n,priority:r}){this.title=e,this.description=t,this.dueDate=n,this.priority=r,this.completed=!1,this.id=u.id+ +new Date,u.id++}}u.id=0,function(){const e={projects:[],currentProject:null,currentTodo:null},t={completeButtonHandler:function(r){r.preventDefault(),e.currentTodo.completed=!e.currentTodo.completed,n(),o.renderToDos(e.currentProject,f,t),o.setActiveToDo(e.currentTodo,t)},deleteButtonHandler:function(r){r.preventDefault();confirm("Are you sure, you want to remove the TODO?")&&(e.currentProject.toDos=e.currentProject.toDos.filter(t=>t.id!==e.currentTodo.id),e.currentTodo=e.currentProject.toDos[0],n(),o.renderToDos(e.currentProject,f,t))},editFormSubmitHandler:function(r){r.preventDefault();const a=new FormData(r.target);for(let[t,n]of a.entries())"dueDate"===t&&(n=new Date(n.split("/").reverse().join(" "))),e.currentTodo[t]=n;n(),alert("Updated!"),o.renderToDos(e.currentProject,f,t),o.setActiveToDo(e.currentTodo,t)}};function n(){localStorage.setItem("projects",JSON.stringify(e.projects))}function r(){const t=localStorage.getItem("projects")?JSON.parse(localStorage.getItem("projects")):function(){const e=[new a("Default project")],t=new u({title:"A regular task",description:"Lorem ipsum dolor sit amet consectetur",dueDate:new Date(2019,7,31),priority:"regular"}),n=new u({title:"Expired task",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorum nulla!",dueDate:new Date(2019,0,1),priority:"regular"}),r=new u({title:"High priority (completed)",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorum nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorum nulla!",dueDate:new Date(2019,7,31),priority:"high"});r.completed=!0;const o=new u({title:"Low priority",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorum nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorum nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorum nulla!",dueDate:new Date(2019,7,31),priority:"low"});return e[0].toDos.push(t,n,r,o),e}();e.projects=t,e.currentProject=e.projects[0]||null,e.currentTodo=e.currentProject?e.currentProject.toDos[0]:null}function i(r){r.preventDefault();const u=prompt("Please enter project title");if(u){const r=new a(u);e.projects.push(r),e.currentProject=r,n();const i=o.addProject(r,s,c);o.setActiveProject(i),o.renderToDos(e.currentProject,f,t)}else alert("Cann't be blank!")}function s(n){n.preventDefault();const r=n.target.dataset.projectId;e.currentProject=e.projects.find(e=>e.id==r),o.setActiveProject(n.target),o.renderToDos(e.currentProject,f,t)}function c(r){r.preventDefault(),r.stopPropagation();if(confirm("Are you sure, you want to remove the project? (All TODOs in it will be removed)")){const a=r.target.parentNode.parentNode,u=r.target.parentElement.dataset.projectId;e.projects=e.projects.filter(e=>e.id!=u),n(),o.removeProject(r.target.parentElement);const i=e.projects[0];i?(e.currentProject=i,o.setActiveProject(a.children[0]),o.renderToDos(i,f,t)):(e.currentProject=null,o.emptyScreen())}}function f(n){n.preventDefault();const r=n.target.dataset.toDoId;e.currentTodo=e.currentProject.toDos.find(e=>e.id==r),o.setActiveToDo(e.currentTodo,t)}return{init:function(){r(),document.getElementById("addProject").addEventListener("click",i),e.projects.length>0&&o.renderProjects(e.projects,s,c),e.currentProject&&o.renderToDos(e.currentProject,f,t),e.currentTodo&&o.renderSingleToDo(e.currentTodo,t)}}}().init()}]);