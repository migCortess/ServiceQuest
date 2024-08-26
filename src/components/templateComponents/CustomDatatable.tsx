import {useState,useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import DataTable from 'react-data-table-component'
import {Spinner} from 'react-bootstrap'
import {EXPORTEXCELDT} from  '../../Constants'
import { BsDatabaseExclamation } from "react-icons/bs";

export const CustomDatatable = (props:any) => {

    const { FillDatatable , //Metodos que se encarga de hacer la llamada al servicio para obtener la data
            Columns,  // columnas del datatable
            Filters = {} , // filtros que se mandaran al servicio por default es un objeto vacio
            InfoData = [],  // data que se cargara en el datatable , si se usa esta opcion no enviar "Filters" ni "FillDatatable"
            ValidateExportButtonByAcction , //Validar por accion el export excel
            showPagination =true,
            showExportExcel = true ,//Opcion para decir si mostrar o no el boton exportal a excel
            ExpandableRows = false, //Si va ser Unca tabla con RowExpandibles
            TablesThemes = {},//color del datatable
            customRowStyles, //estilo condicional segun valor definido
            ChildrenComponent,
            handleRowClick, //funcion para saber cual row esta clickeado
            propsChildren={},
          } = props;   // Mostrar Paginacion

    const [data, setdata] = useState<{ items: [], totalItems: number | null }>({ items: [], totalItems: 0 });
    const [progressPending, setprogressPending] = useState(true);
    const [perPage, setPerPage] = useState(10);
    const [CurrentPage, setCurrentPage] = useState(1);
    const [ExportLoading ,setExportLoading] = useState(false);
    const [t] = useTranslation("global");
    
    const paginationComponentOptions = { 
       rowsPerPageText: t("rowsPerPageText"), 
       rangeSeparatorText: t("rangeSeparatorText"), 
       noRowsPerPage: false, 
       selectAllRowsItem: false, 
       selectAllRowsItemText: t("selectAllRowsItemText")
     }
 
     useEffect(() => {
      (async() => {   
        setprogressPending(true);   
        if(showPagination){ //Mostrare Paginacion por default es true
          Filters["Page"] = CurrentPage;
          Filters["Limit"] = perPage;
          Filters["Pagination"] = true;
        }    
        if(FillDatatable){ //preguntamos si tiene el metodo que obtiene la data
          setdata(await FillDatatable(Filters)); 
        } else { // si no tiene el metodo quiere decir que vamos a recibir la data
          setdata(InfoData);
        }

        setprogressPending(false);
      })();      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[Filters])

    const onChangePage = (page:number) => {
      setprogressPending(true);
      (async () => {
        if (showPagination) {
          //Mostrare Paginacion por default es true
          Filters["Page"] = page;
          Filters["Limit"] = perPage;
          setCurrentPage(page);
        }
        if (FillDatatable) {
          //preguntamos si tiene el metodo que obtiene la data
          setdata(await FillDatatable(Filters));
        } else {
          setdata(InfoData); // si no tiene el metodo quiere decir que vamos a recibir la data
        }

        setprogressPending(false);
      })();
    }

    const handlePerRowsChange = async (newPerPage:number, page:number) => {
      setprogressPending(true);
      (async () => 
        {
          if(showPagination){ //Mostrare Paginacion por default es true
          Filters["Page"] = page;
          Filters["Limit"] = newPerPage;
          setCurrentPage(page); 
          setPerPage(newPerPage);
          }
        
          if(FillDatatable){ //preguntamos si tiene el metodo que obtiene la data
            setdata(await FillDatatable(Filters)); 
          } else {
            setdata(InfoData);
          }
          setprogressPending(false); 
         
        })();
    };


    const ValidNull = (item: string | null) => {
      if (item === null) {
        return "";
      } else {
        return item;
      }
    };

    const ExportToCSV = async (columns:any) => {
      setExportLoading(true);
      if(showPagination){ 
        Filters["Page"] = 1;
        Filters["Limit"] = 999999999;
      }
      let Data:any= []
      if(FillDatatable){ //preguntamos si tiene el metodo que obtiene la data
       Data = await FillDatatable(Filters); 
      }else {
         Data = data;
      }
      var CSV = "";
      columns.forEach((i:any)=>{
        if(i["selector"]){
          CSV = CSV + i.name.replace(/#/g,'') + ","
        }   
      });
      CSV=CSV+'\n';
      Data.items.forEach((item:any) => {
        var row = "";
        columns.forEach((i:any)=>{
          if(i["selector"]){
            var Valor = i.selector(item);
            row = i["format"] ? row+ i.format(item).replace(/,/g, '').replace(/#/g,'') + "," : row+ ValidNull(Valor).toString().replace(/,/g, '').replace(/\./g, '').replace(/#/g,'') +",";      
          }
        });
        CSV= CSV + row+'\n';
      });
       const link = document.createElement('a');    
       if (CSV === ""){
          return
        }else {
     
       const filename = 'export.csv';   
       if (!CSV.match(/^data:text\/csv/i)) {
        CSV = `data:text/csv;charset=utf-8,%EF%BB%BF`+ encodeURI(CSV);
       }    
       link.setAttribute("href", CSV);
       link.setAttribute('download', filename);
       link.click();
      }
      setExportLoading(false);
    }


    const handleSort = async (column: any, sortDirection:any) => {
      setprogressPending(true);
      (async () => 
        {
          if(showPagination){ //Mostrare Paginacion por default es true
          Filters["Page"] = CurrentPage;
          Filters["Limit"] = perPage;
          Filters["SortColumn"] = column.sortField;
          Filters["SortDirection"] = sortDirection;
          }
          if(FillDatatable){ //preguntamos si tiene el metodo que obtiene la data
            setdata(await FillDatatable(Filters)); 
          } else {
            setdata(InfoData); // si no tiene el metodo quiere decir que vamos a recibir la data
          }     
         setprogressPending(false); 
        }
      )();
      };    


    return (
        <div className="col-md-12 m-1 table-resposive pb-4" id="borderTable">
          <div className='row'>
            <div className='col-6 mb-2'>
          {
            showExportExcel ?
              ValidateExportButtonByAcction ?  
              
              <button className="btn btn-tw-primary CtrlPermission" id='table-theme' action-code={EXPORTEXCELDT} onClick={async()=>await ExportToCSV(Columns)}>
              { ExportLoading ?   <> <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                  /> {t("Loading")} </>
                              :<><i className="i-download"></i> {t("Export")}</>}             
            </button>
              
              :
      
              <button className="btn btn-tw-primary" onClick={async()=>await ExportToCSV(Columns)}>
              { ExportLoading ?   <> <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                  /> {t("Loading")} </>
                              :<><i className="i-download"></i> {t("Export")}</>}             
            </button>
            :""
          }</div>
         </div>
            <DataTable
              columns={Columns}
              noDataComponent = {<NotDataInfo/>}
              progressPending={progressPending}
              progressComponent={<Spinner animation="grow" style={{width:"6rem",height:"6rem"}} variant="primary"  />}
              data = {data ? data.items : []}
              pagination = {showPagination}
              paginationServer
              paginationComponentOptions = {paginationComponentOptions}
              onChangeRowsPerPage={handlePerRowsChange}
              paginationTotalRows={data ? data.totalItems ?   data.totalItems : 0 : 0}
              onChangePage={onChangePage}
              onSort={handleSort}
              sortServer
              expandableRows = {ExpandableRows}
              expandableRowsComponent={ChildrenComponent} 
              responsive = {true}
              dense={true}
              customStyles={TablesThemes}
              onRowClicked={handleRowClick}
              conditionalRowStyles={customRowStyles}
              expandableRowsComponentProps = {propsChildren}
              fixedHeader={true}
              fixedHeaderScrollHeight="70vh"
 
            >
            </DataTable>
        </div>
    )
}

const NotDataInfo = () => {
  const [t] = useTranslation("global");
  return (
    <>
    <div className='bg-skin-mainBG card py-1 px-3 w-full'>
    <div className="grid grid-flow-row w-full justify-center items-center my-2 card p-3 border-1 border-skin-primary/40">
          <span className="flex justify-center text-4xl text-skin-primary"><BsDatabaseExclamation /></span>
          <h1 className="text-skin-secondary/80 font-semibold text-lg">
            {" "}
            {t("DataTableCeroRowsMsg")} {" "}
          </h1>
        </div>
        </div>
    </>
  )
}