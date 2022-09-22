import React, {Component} from "react";

import ContentHeader from "../common/template/ContentHeader";
import Content from "../common/template/Content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import TabHeader from "../common/tab/tabHeader";

class billingCycle extends Component { 
    render() { 
        return(
            <div>
            <ContentHeader title="Ciclos de Pagamento" small="Cadastro" />
            <Content>
                <Tabs>
                    <TabsHeader>
                        <TabHeader label='Listar' icon='bars' target='tabList'/>

                        <TabHeader label='Incluir' icon='plus' target='tabCreate'/>

                        <TabHeader label='Incluir' icon='pencil' target='tabUpdate'/>

                        <TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>
                    </TabsHeader>
                    <TabsContent>
                        
                    </TabsContent>
                </Tabs>
            </Content>
            </div>
        )
    }
}



export default billingCycle