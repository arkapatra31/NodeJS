const readXlsxFile = require('read-excel-file/node');

const schema = {
    'Name': {
        prop: 'Name',
        type: String
    },
    'Surname': {
        prop: 'Surname',
        type: String
    },
    'Age': {
        prop: 'Age',
        type: Number
    },
    'Email': {
        prop: 'Email',
        type: String
    }
}

try{
    readXlsxFile('test.xlsx', { schema }).then(({ rows, errors }) => {
        console.log(rows);
    });
} catch(err){
    readXlsxFile('test.xlsx', { schema }).then(({ rows, errors }) => {
        console.log(errors);
    });
}

