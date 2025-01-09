//report for one folder with JSON files
const report = require('multiple-cucumber-html-reporter');
const {format, addMinutes } = require('date-fns');

const executionStartTime = format(Date(), 'dd.MM.yyyy, h:mm:ss');
const executionEndTime = format(addMinutes(Date(), 5), 'dd.MM.yyyy, h:mm:ss');

report.generate({
 jsonDir: 'cucumber_report/',// Path of cucumber json file
 reportPath: 'cucumber_report/cucumber-html',//path of required report
    reportTitle: 'Latest Execution',
    overwrite: true,
 metadata:{
        browser: {
            name: 'Electron',
            version: '118'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '11'
        }
    },
    customData: {
        title: 'info',
        data: [
            {label: 'Project', value: 'Project'},
            {label: 'Release', value: '1.1.1'},
            {label: 'Cycle', value: 'B11111.11111'},
            {label: 'Execution Start Time', value: executionStartTime},
            {label: 'Execution End Time', value: executionEndTime}
        ]
    }
});
console.log(`Report generated for Electron browsers`);