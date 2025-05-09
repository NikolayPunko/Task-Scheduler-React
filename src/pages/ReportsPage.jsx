import {Navigation} from "../components/Navigation";
import {LeftNavigation} from "../components/leftNavigation/LeftNavigation";
import ReportEditor from "../components/reportsConstruct/ReportEditor";
import {useEffect, useRef, useState} from "react";
import ReportService from "../services/ReportService";
import Loading from "../components/loading/Loading";


function ReportsPage() {

    const childRef = useRef();

    const [isLoading, setIsLoading] = useState(false);

    const [isShowReport, setIsShowReport] = useState(false);

    // const [selectReport, setSelectReport] = useState(null);

    const [reportTemplate, setReportTemplate] = useState(null);

    const [reportData, setReportData] = useState(null);

    const templateData = [
        {
            id: 1,
            content: `
         <body id="ip5i"><div id="i6og"><div data-band="true" id="table1"><div id="ienx" class="data-band-table">table1</div><h2 id="i54t">Record</h2><p id="i7rj" class="data-band-field">Select field: {{name}}</p><p id="i39cr" class="data-band-field">Age: {{age}}</p></div></div></body>
        `,
            styles: `
         * { box-sizing: border-box; } body {margin: 0;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#table1{height:100px;width:794px;position:relative;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;border-top-style:dashed;border-right-style:dashed;border-bottom-style:dashed;border-left-style:dashed;border-top-color:rgb(59, 130, 246);border-right-color:rgb(59, 130, 246);border-bottom-color:rgb(59, 130, 246);border-left-color:rgb(59, 130, 246);border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;overflow-x:visible;overflow-y:visible;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#ienx{position:absolute;top:0px;left:0px;background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat:initial;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:rgb(59, 130, 246);color:white;padding-top:2px;padding-right:8px;padding-bottom:2px;padding-left:8px;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;font-size:12px;white-space-collapse:collapse;text-wrap-mode:nowrap;}#i54t{position:absolute;margin-top:10px;}#i7rj{position:absolute;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;left:180px;top:19px;}#i39cr{position:absolute;left:557px;top:19px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}
        `
        }
    ];

    const testData = [
        {
            "id": 1,
            "content": "<body id=\"ixy7\"><div><div description-band=\"true\" id=\"ihuov\">Report title</div><div band=\"true\" id=\"reportTitle\"><div id=\"ieadd\">Отчет по интервалам движения</div><div id=\"iph24\" class=\"band-content\">С 15.04.2025 по 15.04.2025 23:59:59 </div><div id=\"im321\" class=\"band-content\">Автомобиль: АС03881</div></div></div><div id=\"i5k5\"><div description-band=\"true\" id=\"ig3i\">Page header</div><div band=\"true\" id=\"pageHeader\"><div id=\"i22j\" class=\"band-content\">Время<br/>стоянки<br/>ч:мин</div><div id=\"inf62\" class=\"band-content\">Время<br/>движен<br/>ч:мин<br/></div><div id=\"iay5e\" class=\"band-content\">Макс<br/>скор,<br/>км/ч</div><div id=\"igvb5\" class=\"band-content\">Средн<br/>скор,<br/>км/ч</div><div id=\"i26hm\" class=\"band-content\">Путь,<br/>км,м<br/></div><div id=\"inudl\" class=\"band-content\">Конец</div><div id=\"izbos\" class=\"band-content\">Начало</div><div id=\"iswz8\" class=\"vertical-line-block\"></div><div id=\"ipnoh\" class=\"vertical-line-block\"></div><div id=\"i984c\" class=\"vertical-line-block\"></div><div id=\"izk9t\" class=\"vertical-line-block\"></div><div id=\"i8den\" class=\"vertical-line-block\"></div><div id=\"iuk9f\" class=\"vertical-line-block\"></div><div id=\"iewgh\" class=\"line-block\"></div><div id=\"iewgh-2\" class=\"line-block\"></div></div></div><div id=\"iefpk\"><div description-band=\"true\" id=\"i5nii\">DataBand: table3</div><div data-band=\"true\" id=\"table3\"><p id=\"ia9zk-7-2\" class=\"data-band-field\">{{moveTime}}</p><p id=\"ia9zk-6-2\" class=\"data-band-field\">{{maxSpeed}}</p><p id=\"ia9zk-5-2\" class=\"data-band-field\">{{avgSpeed}}</p><p id=\"ia9zk-4-2\" class=\"data-band-field\">{{distanceKm}}</p><p id=\"ia9zk-3\" class=\"data-band-field\">{{end}}</p><p id=\"ia9zk-2\" class=\"data-band-field\">{{start}}</p><div id=\"ijysg-3\" class=\"band-content\">{{stopTime}}</div><p></p><div id=\"ieztf-2\" class=\"line-block\"></div><div id=\"icps6-2\" class=\"vertical-line-block\"></div><div id=\"img1l\" class=\"vertical-line-block\"></div><div id=\"i0sgh\" class=\"vertical-line-block\"></div><div id=\"iji3x\" class=\"vertical-line-block\"></div><div id=\"ivgqa\" class=\"vertical-line-block\"></div><div id=\"i8pq4\" class=\"vertical-line-block\"></div></div></div><div><div description-band=\"true\" id=\"iqztk\">Report summary</div><div band=\"true\" id=\"reportSummary\"><div id=\"ieztf\" class=\"line-block\"></div><div id=\"icps6\" class=\"vertical-line-block\"></div><div id=\"icps6-7\" class=\"vertical-line-block\"></div><div id=\"icps6-6\" class=\"vertical-line-block\"></div><div id=\"icps6-5\" class=\"vertical-line-block\"></div><div id=\"icps6-4\" class=\"vertical-line-block\"></div><div id=\"icps6-3\" class=\"vertical-line-block\"></div><p id=\"ia9zk-4\" class=\"data-band-field\">109.34</p><p id=\"ia9zk-5\" class=\"data-band-field\">39.70</p><p id=\"ia9zk-6\" class=\"data-band-field\">69.00</p><p id=\"ia9zk-7\" class=\"data-band-field\">01:56</p><div id=\"ijysg\" class=\"band-content\">05:15</div></div></div></body>",
            "styles": "* { box-sizing: border-box; } body {margin: 0;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}.band-content{flex-grow:1;}#ig3i{background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat:initial;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:rgb(237, 237, 237);padding-top:2px;padding-right:8px;padding-bottom:2px;padding-left:8px;font-weight:bold;font-size:14px;pointer-events:none;}#pageHeader{height:60px;width:794px;background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat:initial;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:rgb(251, 251, 251);position:relative;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:dashed;border-right-style:dashed;border-bottom-style:dashed;border-left-style:dashed;border-top-color:rgb(59, 130, 246);border-right-color:rgb(59, 130, 246);border-bottom-color:rgb(59, 130, 246);border-left-color:rgb(59, 130, 246);border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;padding-top:30px;padding-right:10px;padding-bottom:10px;padding-left:10px;overflow-x:visible;overflow-y:visible;}#i22j{left:722px;top:0px;position:absolute;text-align:center;font-weight:700;}#izbos{left:70px;top:0px;position:absolute;text-align:center;font-weight:700;}#inudl{left:211px;top:0px;position:absolute;text-align:center;font-weight:700;}#i26hm{left:362px;top:0px;position:absolute;text-align:center;font-weight:700;}#igvb5{left:449px;top:0px;position:absolute;text-align:center;font-weight:700;}#iay5e{left:545px;top:0px;position:absolute;text-align:center;font-weight:700;}#inf62{left:631px;top:0px;position:absolute;text-align:center;font-weight:700;}#iswz8{width:2px;height:100%;background-color:rgb(0, 0, 0);display:inline-block;left:165px;top:0px;position:absolute;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#iuk9f{width:2px;height:100%;background-color:rgb(0, 0, 0);display:inline-block;left:703px;top:0px;position:absolute;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#i8den{width:2px;height:100%;background-color:rgb(0, 0, 0);display:inline-block;left:607px;top:0px;position:absolute;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#izk9t{width:2px;height:100%;background-color:rgb(0, 0, 0);display:inline-block;left:515px;top:0px;position:absolute;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#i984c{width:2px;height:100%;background-color:rgb(0, 0, 0);display:inline-block;left:428px;top:0px;position:absolute;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#ipnoh{width:2px;height:100%;background-color:rgb(0, 0, 0);display:inline-block;left:326px;top:0px;position:absolute;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#iewgh{width:100%;height:2px;background-color:rgb(0, 0, 0);left:0px;top:0px;position:absolute;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#i5nii{background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat:initial;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:rgb(248, 177, 89);padding-top:2px;padding-right:8px;padding-bottom:2px;padding-left:8px;font-weight:bold;font-size:14px;pointer-events:none;}#table3{height:60px;width:794px;background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat:initial;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:rgb(246, 246, 246);position:relative;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:dashed;border-right-style:dashed;border-bottom-style:dashed;border-left-style:dashed;border-top-color:rgb(244, 244, 244);border-right-color:rgb(244, 244, 244);border-bottom-color:rgb(244, 244, 244);border-left-color:rgb(244, 244, 244);border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;padding-top:30px;padding-right:10px;padding-bottom:10px;padding-left:10px;overflow-x:visible;overflow-y:visible;}#ia9zk-2{position:absolute;left:8px;top:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;height:100%;width:150px;text-align:center;}#ia9zk-3{position:absolute;left:178px;top:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;height:100%;width:150px;text-align:center;}#ia9zk-4{position:absolute;left:328px;top:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;height:100%;width:100px;text-align:center;font-weight:700;}#ia9zk-5{position:absolute;left:435px;top:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;height:100%;text-align:center;width:80px;font-weight:700;}#ia9zk-6{position:absolute;left:528px;top:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;height:100%;text-align:center;width:70px;font-weight:700;}#ia9zk-7{position:absolute;left:623px;top:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;height:100%;text-align:center;width:80px;font-weight:700;}#ieztf{width:100%;height:2px;background-color:rgb(0, 0, 0);margin-top:10px;margin-right:0px;margin-bottom:10px;margin-left:0px;left:0px;position:absolute;top:58px;}#ijysg{left:720px;top:0px;position:absolute;font-weight:700;}#icps6{width:2px;height:100%;background-color:rgb(0, 0, 0);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;display:inline-block;left:165px;top:0px;position:absolute;}#i8pq4{width:2px;height:100%;background-color:rgb(0, 0, 0);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;display:inline-block;left:165px;top:0px;position:absolute;}#ivgqa{width:2px;height:100%;background-color:rgb(0, 0, 0);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;display:inline-block;left:326px;top:0px;position:absolute;}#iji3x{width:2px;height:100%;background-color:rgb(0, 0, 0);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;display:inline-block;left:428px;top:0px;position:absolute;}#i0sgh{width:2px;height:100%;background-color:rgb(0, 0, 0);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;display:inline-block;left:515px;top:0px;position:absolute;}#img1l{width:2px;height:100%;background-color:rgb(0, 0, 0);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;display:inline-block;left:607px;top:0px;position:absolute;}#ihuov{background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat:initial;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:rgb(237, 237, 237);padding-top:2px;padding-right:8px;padding-bottom:2px;padding-left:8px;font-weight:bold;font-size:14px;pointer-events:none;}#reportTitle{height:100px;width:794px;background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat:initial;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:rgb(251, 251, 251);position:relative;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:dashed;border-right-style:dashed;border-bottom-style:dashed;border-left-style:dashed;border-top-color:rgb(59, 130, 246);border-right-color:rgb(59, 130, 246);border-bottom-color:rgb(59, 130, 246);border-left-color:rgb(59, 130, 246);border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;padding-top:30px;padding-right:10px;padding-bottom:10px;padding-left:10px;overflow-x:visible;overflow-y:visible;}#iewgh-2{width:100%;height:2px;background-color:rgb(0, 0, 0);left:0px;top:50px;position:absolute;margin-top:8px;margin-right:0px;margin-bottom:10px;margin-left:0px;}#ieadd{padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;font-size:1em;font-weight:bold;left:271px;top:22px;position:absolute;}#iph24{left:271px;top:69px;position:absolute;}#im321{left:619px;top:32px;position:absolute;}#iqztk{background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat:initial;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:rgb(237, 237, 237);padding-top:2px;padding-right:8px;padding-bottom:2px;padding-left:8px;font-weight:bold;font-size:14px;pointer-events:none;}#reportSummary{height:70px;width:794px;background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat:initial;background-attachment:initial;background-origin:initial;background-clip:initial;position:relative;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:dashed;border-right-style:dashed;border-bottom-style:dashed;border-left-style:dashed;border-top-color:rgb(59, 130, 246);border-right-color:rgb(59, 130, 246);border-bottom-color:rgb(59, 130, 246);border-left-color:rgb(59, 130, 246);border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;padding-top:30px;padding-right:10px;padding-bottom:10px;padding-left:10px;overflow-x:visible;overflow-y:visible;background-color:rgb(248, 248, 248);}#ieztf-2{width:100%;height:2px;background-color:rgb(0, 0, 0);margin-top:10px;margin-right:0px;margin-bottom:10px;margin-left:0px;left:0px;position:absolute;top:48px;}#icps6-2{width:2px;height:100%;background-color:rgb(0, 0, 0);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;display:inline-block;left:703px;top:0px;position:absolute;}#icps6-3{width:2px;height:100%;background-color:rgb(0, 0, 0);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;display:inline-block;left:703px;top:0px;position:absolute;}#icps6-4{width:2px;height:100%;background-color:rgb(0, 0, 0);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;display:inline-block;left:607px;top:0px;position:absolute;}#icps6-5{width:2px;height:100%;background-color:rgb(0, 0, 0);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;display:inline-block;left:515px;top:0px;position:absolute;}#icps6-6{width:2px;height:100%;background-color:rgb(0, 0, 0);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;display:inline-block;left:428px;top:0px;position:absolute;}#icps6-7{width:2px;height:100%;background-color:rgb(0, 0, 0);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;display:inline-block;left:326px;top:0px;position:absolute;}#ia9zk-4-2{position:absolute;left:328px;top:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;height:100%;width:100px;text-align:center;}#ia9zk-5-2{position:absolute;left:435px;top:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;height:100%;text-align:center;width:80px;}#ia9zk-6-2{position:absolute;left:528px;top:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;height:100%;text-align:center;width:70px;}#ia9zk-7-2{position:absolute;left:623px;top:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;height:100%;text-align:center;width:80px;}#ijysg-3{left:720px;top:0px;position:absolute;}"
        },
        {
            "id": 2,
            "content": "<body id=\"ixy7\"><div><div description-band=\"true\" id=\"ihuov\">Report title</div><div band=\"true\" id=\"reportTitle\"><div id=\"ieadd\">Отчет по интервалам движения</div><div id=\"iph24\" class=\"band-content\">С 15.04.2025 по 15.04.2025 23:59:59 </div><div id=\"im321\" class=\"band-content\">Автомобиль: АС03881</div></div></div><div id=\"i5k5\"><div description-band=\"true\" id=\"ig3i\">Page header</div><div band=\"true\" id=\"pageHeader\"><div id=\"i22j\" class=\"band-content\">Время<br/>стоянки<br/>ч:мин</div><div id=\"inf62\" class=\"band-content\">Время<br/>движен<br/>ч:мин<br/></div><div id=\"iay5e\" class=\"band-content\">Макс<br/>скор,<br/>км/ч</div><div id=\"igvb5\" class=\"band-content\">Средн<br/>скор,<br/>км/ч</div><div id=\"i26hm\" class=\"band-content\">Путь,<br/>км,м<br/></div><div id=\"inudl\" class=\"band-content\">Конец</div><div id=\"izbos\" class=\"band-content\">Начало</div><div id=\"iswz8\" class=\"vertical-line-block\"></div><div id=\"ipnoh\" class=\"vertical-line-block\"></div><div id=\"i984c\" class=\"vertical-line-block\"></div><div id=\"izk9t\" class=\"vertical-line-block\"></div><div id=\"i8den\" class=\"vertical-line-block\"></div><div id=\"iuk9f\" class=\"vertical-line-block\"></div><div id=\"iewgh\" class=\"line-block\"></div><div id=\"iewgh-2\" class=\"line-block\"></div></div></div><div id=\"iefpk\"><div description-band=\"true\" id=\"i5nii\">DataBand: table3</div><div data-band=\"true\" id=\"table3\"><p id=\"ia9zk-7-2\" class=\"data-band-field\">{{moveTime}}</p><p id=\"ia9zk-6-2\" class=\"data-band-field\">{{maxSpeed}}</p><p id=\"ia9zk-5-2\" class=\"data-band-field\">{{avgSpeed}}</p><p id=\"ia9zk-4-2\" class=\"data-band-field\">{{distanceKm}}</p><p id=\"ia9zk-3\" class=\"data-band-field\">{{end}}</p><p id=\"ia9zk-2\" class=\"data-band-field\">{{start}}</p><div id=\"ijysg-3\" class=\"band-content\">{{stopTime}}</div><p></p><div id=\"ieztf-2\" class=\"line-block\"></div><div id=\"icps6-2\" class=\"vertical-line-block\"></div><div id=\"img1l\" class=\"vertical-line-block\"></div><div id=\"i0sgh\" class=\"vertical-line-block\"></div><div id=\"iji3x\" class=\"vertical-line-block\"></div><div id=\"ivgqa\" class=\"vertical-line-block\"></div><div id=\"i8pq4\" class=\"vertical-line-block\"></div></div></div><div><div description-band=\"true\" id=\"iqztk\">Report summary</div><div band=\"true\" id=\"reportSummary\"><div id=\"ieztf\" class=\"line-block\"></div><div id=\"icps6\" class=\"vertical-line-block\"></div><div id=\"icps6-7\" class=\"vertical-line-block\"></div><div id=\"icps6-6\" class=\"vertical-line-block\"></div><div id=\"icps6-5\" class=\"vertical-line-block\"></div><div id=\"icps6-4\" class=\"vertical-line-block\"></div><div id=\"icps6-3\" class=\"vertical-line-block\"></div><p id=\"ia9zk-4\" class=\"data-band-field\">109.34</p><p id=\"ia9zk-5\" class=\"data-band-field\">39.70</p><p id=\"ia9zk-6\" class=\"data-band-field\">69.00</p><p id=\"ia9zk-7\" class=\"data-band-field\">01:56</p><div id=\"ijysg\" class=\"band-content\">05:15</div></div></div></body>",
            "styles": ""
        }
    ]

    async function fetchReportTemplate() {
        try {
            // const ID = Number(params.id);

            // setError('');

            const response = await ReportService.getReportTemplateByReportName("LuMoveDay");
            setReportTemplate(response.data);

            // console.log(response.data)

        } catch (e) {
            const error = e;

            // setError(error.message)
        }
    }

    async function fetchReportData() {
        try {
            // const ID = Number(params.id);

            // setError('');

            const response = await ReportService.getDataForReport("lumoveday");


            dataTest.tableData[0].data = response.data;

            setReportData(dataTest);

            // console.log(response.data)

        } catch (e) {
            const error = e;

            // setError(error.message)
        }
    }

    let dataTest = {
        globalVar: [
            {
                var1: "111",
            },
            {
                var2: "222",
            },
            {
                var3: "333",
            },
        ],
        tableData: [
            {
                tableName: "LuMoveDay",
                data: []
            }
        ]
    }


    function removeBodyTag(html) {
        return html.replace(/<body[^>]*>([\s\S]*?)<\/body>/i, '$1');
    }


    function renderTemplate(template) {
        // template = JSON.parse(template);
        const style = document.createElement('style');
        style.textContent = template.styles;
        document.head.appendChild(style);

        const container = document.getElementById('preview');
        container.innerHTML = removeBodyTag(template.content);
    }

    useEffect(() => {
        if (reportData && reportTemplate) {
            // console.log(reportData)
            // console.log(reportTemplate)

            if (childRef.current) { //вызываем метод рендера у ребенка
                childRef.current.customMethod(reportData, reportTemplate.content, reportTemplate.styles);
            }
            setTimeout(() => {

                setIsLoading(false);
            }, 1500);
        }

    }, [reportTemplate, reportData]);

    async function handleReportClick(i) {
        setIsLoading(true)
        await fetchReportTemplate();
        await fetchReportData();

        setIsShowReport(true)


    }


    return (
        <>


            <Navigation isHiddenMenu={false} isOpenMenu={false} setOpenMenu={() => {
            }}/>
            <div className="flex flex-row window-height">
                <div className="w-[200px] py-2 border-r-2 bg-gray-50 justify-stretch">
                    <LeftNavigation/>
                </div>
                <div className="flex flex-col w-full">

                    {isLoading && <Loading/>

                    }

                    {!isShowReport && !isLoading && <>
                        <div className="px-24 py-16">
                            <span className="text-2xl font-bold">Доступные отчеты</span>
                        </div>
                        <div className="px-24 py-2">
                            <div className="flex flex-col w-1/4">
                                <span
                                    className="px-2 bg-blue-800 text-white rounded shadow-inner">01. Отчеты LU_MOVE</span>
                                <button onClick={() => handleReportClick("")}
                                        className="my-1 mx-3 px-2 text-left rounded text-blue-800  hover:bg-blue-50">За
                                    текущие сутки
                                </button>
                                <button
                                    className="my-1 mx-3 px-2 text-left rounded text-blue-800  hover:bg-blue-50 disabled:bg-gray-100"
                                    disabled={true}>С выбором даты
                                </button>
                                <button
                                    className="my-1 mx-3 px-2 text-left rounded text-blue-800  hover:bg-blue-50 disabled:bg-gray-100"
                                    disabled={true}>С расширенными настройками
                                </button>
                            </div>


                        </div>
                    </>}


                    <div className={isShowReport && !isLoading ? 'block' : 'hidden'}>

                        <ReportEditor previewMode={true} onCloseReport={() => setIsShowReport(!isShowReport)}
                                      ref={childRef}
                        />


                    </div>


                </div>

            </div>
        </>
    )
}


export default ReportsPage;