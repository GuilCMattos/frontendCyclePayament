import React, {Component} from "react";

import ContentHeader from "../common/template/ContentHeader";
import Content from "../common/template/Content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";

class billingCycle extends Component { 
    render() { 
        return(
            <div>
            <ContentHeader title="Ciclow de Pagamento" small="Cadastro" />
            <Content>
                <Tabs>
                    <TabsHeader>

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