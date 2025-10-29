import axios from "axios";

const instance=axios.create({
    baseURL : "https://api.themoviedb.org/3/",
     headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODIzOWQxMGNkOGE0MmQwNTNmNDllNDdkZGRhODUzZiIsIm5iZiI6MTc2MTYzOTk4Ny43NzEwMDAxLCJzdWIiOiI2OTAwN2UzMzI5ZGYxMDhkYWFiYmY4YjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.F45csaNqD8cQjvKBlCryXyoKrOLoToW4cODOvsSRPjQ'
  }
})
export default instance;