import $api, {API_URL} from "../http";


export default class ReportService {



    static async getReportTemplateByReportName(reportName) {
        return $api.get(`${API_URL}/api/report/` + reportName)
    }

    static async getParametersMetaByReportName(reportName) {
        return $api.get(`${API_URL}/api/report/` + reportName + `/parameters`)
    }

    static async createReportTemplate(reportName, reportCategory, dbUrl, dbUsername, dbPassword, dbDriver, sql, parametersMeta, content, styles) {
        return $api.post(`${API_URL}/api/report/create`, {reportName, reportCategory, dbUrl, dbUsername,
            dbPassword, dbDriver, sql, parameters: JSON.stringify(parametersMeta), content, styles})
    }

    static async getReportsName() {
        return $api.get(`${API_URL}/api/report/names`)
    }

    static async getReportsNameGroupCategory() {
        return $api.get(`${API_URL}/api/report/categories`)
    }

    static async getDataByReportName(reportName, parameters) {
        return $api.post(`${API_URL}/api/report/data/` + reportName, {parameters})
    }

    static async getDataForReport(reportName, reportCategory, dbUrl, dbUsername, dbPassword, dbDriver, sql, content, styles, parameters) {
        return $api.post(`${API_URL}/api/report/data`,  {
            reportTemplateDTO: {
                reportName,
                reportCategory,
                dbUrl,
                dbUsername,
                dbPassword,
                dbDriver,
                sql,
                content,
                styles
            },
            parameters: parameters
        });
    }

    static async getDataForReport2(reportName, reportCategory, dbUrl, dbUsername, dbPassword, dbDriver, sql, parameters, content, styles) {
        return $api.post(`${API_URL}/api/report/data`, {reportName, reportCategory, dbUrl, dbUsername,
            dbPassword, dbDriver, sql, parameters, content, styles})
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