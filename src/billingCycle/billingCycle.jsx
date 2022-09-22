import React, {Component} from "react";

import ContentHeader from "../common/template/ContentHeader";
import Content from "../common/template/Content";

class billingCycle extends Component { 
    render() { 
        return(
            <div>
            <ContentHeader title="Ciclow de Pagamento" small="Cadastro" />
            <Content>
                Ciclo de Pagamento
            </Content>
            </div>
        )
    }
}

export default billingCycle