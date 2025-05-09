import $api, {API_URL} from "../http";



export default class ReportService {



    static async getReportTemplateByReportName(reportName) {
        return $api.get(`${API_URL}/api/report/` + reportName)
    }

    static async createReportTemplate(reportName, content, styles) {
        return $api.post(`${API_URL}/api/report/create`, {reportName, content, styles})
    }

    static async getReportsName() {
        return $api.get(`${API_URL}/api/report/reportsName`)
    }


    static async getDataForReport(dataName) {
        return $api.get(`${API_URL}/api/report/` + dataName)
    }


    static convertReportsNameToSelectOpt(data){
        let options = [];
        for (let i = 0; i < data.length; i++) {
            let x = {
                value: data[i],
                label: data[i]
            }
            options[i] = x;
        }
        return options;
    }

}