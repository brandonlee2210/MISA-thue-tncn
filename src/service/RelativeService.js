import BaseService from "./BaseService";

class RelativeServiceClass extends BaseService {
  constructor() {
    super("Relatives");
  }
}

const RelativeService = new RelativeServiceClass();

export default RelativeService;
