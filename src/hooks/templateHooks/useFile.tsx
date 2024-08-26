import * as FileService from "../../services/templateServices/FileService";

export const useFile = () => {
  const FileList = async (Source:string, CodeFileType:string,  IdRelation:number) => {
    const filters = {
      source: Source,
      codeFileType: CodeFileType,
      idRelation: IdRelation,
    };
    const response = await FileService.GetFileList(filters);
    return response;
  };

  const AddFileRelation = async (Source:string, CodeFileType:string, IdRelation:number, IdFile:number) => {
    let Result;
    const AjaxObj = {
        source: Source,
        codeFileType: CodeFileType,
        idRelation: IdRelation,
        idFile: IdFile
      };
    try {
      Result = await FileService.AddFileRelation(AjaxObj);
      return Result;
    } catch {}
  };

  const DeleteFileRelation = async (Source:string, CodeFileType:string, IdRelation:number, IdFile:number) => {
    const AjaxObj = {
        source: Source,
        codeFileType: CodeFileType,
        idRelation: IdRelation,
        idFile: IdFile
      };
    try {
    const response = await FileService.DeleteFileRelation(AjaxObj);
    return response;
    } catch {}
  }; 

  return {
    FileList,
    AddFileRelation,
    DeleteFileRelation
  };
};
