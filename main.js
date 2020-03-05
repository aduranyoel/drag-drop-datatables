var dragSrcRow = null;  // Informacion que se envia
var srcTable = '';  // Tabla de origen


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

            var trs = $(this).DataTable().table().container().querySelectorAll('tbody tr');
            [].forEach.call(trs, function (row) {
                row.addEventListener('dragstart', handleDragStart, false);
                row.addEventListener('dragenter', handleDragEnter, false)
                row.addEventListener('dragover', handleDragOver, false);
                row.addEventListener('dragleave', handleDragLeave, false);
                row.addEventListener('drop', handleDrop, false);
                row.addEventListener('dragend', handleDragEnd, false);
                row.addEventListener('click', handleClick, false);
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

            var trs = $(this).DataTable().table().container().querySelectorAll('tbody tr');
            [].forEach.call(trs, function (row) {
                row.addEventListener('dragstart', handleDragStart, false);
                row.addEventListener('dragenter', handleDragEnter, false)
                row.addEventListener('dragover', handleDragOver, false);
                row.addEventListener('dragleave', handleDragLeave, false);
                row.addEventListener('drop', handleDrop, false);
                row.addEventListener('dragend', handleDragEnd, false);
                row.addEventListener('click', handleClick, false);
            });
        }
    });

})

function handleClick(e) {
    this.classList.toggle('over');
}

function handleDragStart(e) {

    var table = $(this).closest('table')
    var selected = table.find('.over')

    selected.length
        ? [].forEach.call(selected, function (ele) {

            ele.style.opacity = '0.4';
        })
        : this.style.opacity = '0.4';

    dragSrcRow = {
        data: $(table).DataTable().rows(selected.length ? selected : this).data(),
        elements: selected.length ? selected : this
    };

    srcTable = table.attr('id')

    // Allow moves
    e.dataTransfer.effectAllowed = 'move';

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

    var currentTable = $(this).closest('table').attr('id');

    if (currentTable !== srcTable) {
        this.classList.add('over');
    }
}

function handleDragLeave(e) {

    var currentTable = $(this).closest('table').attr('id');

    if (currentTable !== srcTable) {
        this.classList.remove('over');
    }
}

function handleDrop(e) {

    if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
    }

    // Get destination table id, row
    var dstTable = $(this).closest('table').attr('id');

    // No need to process if src and dst table are the same
    if (srcTable !== dstTable) {

        // Add row to destination Datatable
        $('#' + dstTable).DataTable().rows.add(dragSrcRow.data).draw();

        // Remove ro from source Datatable
        $('#' + srcTable).DataTable().rows(dragSrcRow.elements).remove().draw();

    }
    return false;
}

function handleDragEnd() {

    // Reset the opacity of the source row
    this.style.opacity = '1.0';
    this.classList.remove('over');

    var table = $(this).closest('table')
    var selected = table.find('.over')

    selected.length
        ? [].forEach.call(selected, function (r) {
            r.style.opacity = '1.0';
            r.classList.remove('over');
        })
        : null


}