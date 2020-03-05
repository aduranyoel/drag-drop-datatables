var dragSrcRow = null;  // Keep track of the source row
var srcTable = '';  // Global tracking of table being dragged for 'over' class setting
var rows = [];   // Global rows for #example
var rows2 = [];  // Global rows for #example2


const data = [
    {
        "codigoDefecto": "1070",
        "codigoFamilia": "ASF",
        "descDefecto": "DESPRENDIMIENTO DE VINIL",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2013-02-01 11:19:30.0",
        "flagEstado": "",
        "id": 79640882
    },
    {
        "codigoDefecto": "1419",
        "codigoFamilia": "ASF",
        "descDefecto": "CORTE IRREGULAR",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2014-08-25 17:56:07.0",
        "flagEstado": "",
        "id": 79666695
    },
    {
        "codigoDefecto": "1421",
        "codigoFamilia": "ASF",
        "descDefecto": "COSTURA",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2014-08-25 17:56:07.0",
        "flagEstado": "",
        "id": 79666696
    },
    {
        "codigoDefecto": "1411",
        "codigoFamilia": "ASF",
        "descDefecto": "AMARRES",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2014-08-25 17:56:07.0",
        "flagEstado": "",
        "id": 79666711
    },
    {
        "codigoDefecto": "1425",
        "codigoFamilia": "ASF",
        "descDefecto": "DESPEINADO",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2014-08-25 17:56:07.0",
        "flagEstado": "",
        "id": 79666719
    },
    {
        "codigoDefecto": "1453",
        "codigoFamilia": "ASF",
        "descDefecto": "PUNTAS DESALINEADAS",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2014-08-25 17:56:07.0",
        "flagEstado": "",
        "id": 79666738
    },
    {
        "codigoDefecto": "1457",
        "codigoFamilia": "ASF",
        "descDefecto": "ROLLO CORTADO",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2014-08-25 17:56:07.0",
        "flagEstado": "",
        "id": 79666740
    },
    {
        "codigoDefecto": "1458",
        "codigoFamilia": "ASF",
        "descDefecto": "ROLLO EMPALMADO",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2014-08-25 17:56:07.0",
        "flagEstado": "",
        "id": 79666741
    },
    {
        "codigoDefecto": "902",
        "codigoFamilia": "ASF",
        "descDefecto": "CAMBIO DE ESPESOR",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "",
        "flagEstado": "",
        "id": 333
    },
    {
        "codigoDefecto": "7",
        "codigoFamilia": "ASF",
        "descDefecto": "MALTRATO",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2011-10-17 15:10:29.0",
        "flagEstado": "",
        "id": 5
    },
    {
        "codigoDefecto": "9",
        "codigoFamilia": "ASF",
        "descDefecto": "MOJADO",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2011-10-17 15:10:29.0",
        "flagEstado": "",
        "id": 7
    },
    {
        "codigoDefecto": "35",
        "codigoFamilia": "ASF",
        "descDefecto": "ROLLO ENVOLVENTE PROTECTOR",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2011-10-17 15:10:29.0",
        "flagEstado": "",
        "id": 31
    },
    {
        "codigoDefecto": "71",
        "codigoFamilia": "ASF",
        "descDefecto": "EMPAQUE",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2011-10-17 15:10:29.0",
        "flagEstado": "",
        "id": 58
    },
    {
        "codigoDefecto": "73",
        "codigoFamilia": "ASF",
        "descDefecto": "MAL ENROLLADO",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2011-10-17 15:10:29.0",
        "flagEstado": "",
        "id": 60
    },
    {
        "codigoDefecto": "75",
        "codigoFamilia": "ASF",
        "descDefecto": "RECHUPE (ROLLO)",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2011-10-17 15:10:29.0",
        "flagEstado": "",
        "id": 62
    },
    {
        "codigoDefecto": "78",
        "codigoFamilia": "ASF",
        "descDefecto": "TENSIÓN DE ENROLLADO",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2011-10-17 15:10:29.0",
        "flagEstado": "",
        "id": 65
    },
    {
        "codigoDefecto": "80",
        "codigoFamilia": "ASF",
        "descDefecto": "80",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "",
        "flagEstado": "",
        "id": 66
    },
    {
        "codigoDefecto": "81",
        "codigoFamilia": "ASF",
        "descDefecto": "TELESCOPIADO",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2011-10-17 15:10:29.0",
        "flagEstado": "",
        "id": 67
    },
    {
        "codigoDefecto": "82",
        "codigoFamilia": "ASF",
        "descDefecto": "COLEADO",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2011-10-17 15:10:29.0",
        "flagEstado": "",
        "id": 68
    },
    {
        "codigoDefecto": "83",
        "codigoFamilia": "ASF",
        "descDefecto": "OVALADO",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2011-10-17 15:10:29.0",
        "flagEstado": "",
        "id": 69
    },
    {
        "codigoDefecto": "92",
        "codigoFamilia": "ASF",
        "descDefecto": "ROLLO SIN IDENTIFICACIÓN",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2011-10-17 15:10:29.0",
        "flagEstado": "",
        "id": 72
    },
    {
        "codigoDefecto": "180",
        "codigoFamilia": "ASF",
        "descDefecto": "DOBLEZ PAÑUELO",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2011-10-17 15:10:29.0",
        "flagEstado": "",
        "id": 96
    },
    {
        "codigoDefecto": "192",
        "codigoFamilia": "ASF",
        "descDefecto": "ROLLO MAL IDENTIFICADO",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2011-10-17 15:10:29.0",
        "flagEstado": "",
        "id": 99
    },
    {
        "codigoDefecto": "573",
        "codigoFamilia": "ASF",
        "descDefecto": "ROLLO CAZUELA",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2011-10-17 15:10:29.0",
        "flagEstado": "",
        "id": 184
    },
    {
        "codigoDefecto": "593",
        "codigoFamilia": "ASF",
        "descDefecto": "DEVANADO",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2011-10-17 15:10:29.0",
        "flagEstado": "",
        "id": 191
    },
    {
        "codigoDefecto": "774",
        "codigoFamilia": "ASF",
        "descDefecto": "ROLLO CORCHOLATA",
        "descFamilia": "Aspecto Físico",
        "fechaAlta": "2011-10-17 15:10:29.0",
        "flagEstado": "",
        "id": 242
    }
]
window.addEventListener('load', function () {

    $('#table1').DataTable({
        columns: [
            { title: 'codigo', data: 'codigoDefecto' },
            { title: 'familia', data: 'codigoFamilia' },
            { title: 'descripcion', data: 'descDefecto' },
            { title: 'fecha', data: 'fechaAlta' },
        ],
        data: data,
        dom: 't',
        createdRow: function (row, data, dataIndex, cells) {
            $(row).attr('draggable', 'true');
        },
        drawCallback: function () {
            // Add HTML5 draggable event listeners to each row
            rows = document.querySelectorAll('#table1 tbody tr');
            [].forEach.call(rows, function (row) {

                row.addEventListener('dragstart', handleDragStart, false);
                row.addEventListener('dragenter', handleDragEnter, false)
                row.addEventListener('dragover', handleDragOver, false);
                row.addEventListener('dragleave', handleDragLeave, false);
                row.addEventListener('drop', handleDrop, false);
                row.addEventListener('dragend', handleDragEnd, false);
            });
        }
    });

    $('#table2').DataTable({
        columns: [
            { title: 'codigo', data: 'codigoDefecto' },
            { title: 'familia', data: 'codigoFamilia' },
            { title: 'descripcion', data: 'descDefecto' },
            { title: 'fecha', data: 'fechaAlta' },
        ],
        data: [],
        dom: 't',
        createdRow: function (row, data, dataIndex, cells) {
            $(row).attr('draggable', 'true');
        },
        drawCallback: function () {
            // Add HTML5 draggable event listeners to each row
            rows2 = document.querySelectorAll('#table2 tbody tr');
            [].forEach.call(rows2, function (row) {
                row.addEventListener('dragstart', handleDragStart, false);
                row.addEventListener('dragenter', handleDragEnter, false)
                row.addEventListener('dragover', handleDragOver, false);
                row.addEventListener('dragleave', handleDragLeave, false);
                row.addEventListener('drop', handleDrop, false);
                row.addEventListener('dragend', handleDragEnd, false);
            });
        }
    });

})

function handleDragStart(e) {
    // this / e.target is the source node.

    // Set the source row opacity
    this.style.opacity = '0.4';
    console.log(e);

    // Keep track globally of the source row and source table id
    dragSrcRow = this;
    srcTable = this.parentNode.parentNode.id

    // Allow moves
    e.dataTransfer.effectAllowed = 'move';

    // Save the source row html as text
    e.dataTransfer.setData('text', e.target.outerHTML);

}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
    }

    // Allow moves
    e.dataTransfer.dropEffect = 'move';

    return false;
}

function handleDragEnter(e) {
    // this / e.target is the current hover target.  

    // Get current table id
    var currentTable = this.parentNode.parentNode.id

    // Don't show drop zone if in source table
    if (currentTable !== srcTable) {
        this.classList.add('over');
    }
}

function handleDragLeave(e) {
    // this / e.target is previous target element.

    // Remove the drop zone when leaving element
    this.classList.remove('over');
}

function handleDrop(e) {
    // this / e.target is current target element.

    if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
    }

    // Get destination table id, row
    var dstTable = $(this).closest('table').attr('id');
    var dstRow = $(this).closest('tr');

    // No need to process if src and dst table are the same
    if (srcTable !== dstTable) {

        // Get source transfer data
        var srcData = e.dataTransfer.getData('text');

        // Add row to destination Datatable
        $('#' + dstTable).DataTable().row.add($(srcData)).draw();

        // Remove ro from source Datatable
        $('#' + srcTable).DataTable().row(dragSrcRow).remove().draw();

    }
    return false;
}

function handleDragEnd(e) {
    // this/e.target is the source node.

    // Reset the opacity of the source row
    this.style.opacity = '1.0';

    // Clear 'over' class from both tables
    // and reset opacity
    [].forEach.call(rows, function (row) {
        row.classList.remove('over');
        row.style.opacity = '1.0';
    });

    [].forEach.call(rows2, function (row) {
        row.classList.remove('over');
        row.style.opacity = '1.0';
    });
}