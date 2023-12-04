import { Layout } from 'antd';
import { UiFooter } from '../componets/ui/UiFooter';
import { UiHeader } from '../componets/ui/UiHeader';
import { Outlet } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

export const MainLayout = () => {
    return (
        <Layout>
            <Header className='text-white bg-red-200'>
                <UiHeader/>
            </Header>
            <Layout className='min-h-[80vh]'>
                <Content>
                    <Outlet/>
                </Content>
            </Layout>
            <Footer className='bg-red-200'>
                <UiFooter/>
            </Footer>
        </Layout>
    )
}
