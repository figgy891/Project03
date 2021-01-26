import { Tabs } from 'antd';
const { TabPane } = Tabs;

export default function TodoTab() {


    return (
        <div className={'p-5 border m-5 md:m-12 lg:m-20'}>
            <div className={'mt-5'}>&nbsp;</div>
            <Tabs defaultActiveKey="1" type={'card'}>
                <TabPane tab="All" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Active" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Completed" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>

            <div className={'mt-5'}>&nbsp;</div>
        </div>
    );
}