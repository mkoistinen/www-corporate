import React, { Component } from 'react'

import Anchor from 'grommet/components/Anchor'
import App from 'grommet/components/App'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Header from 'grommet/components/Header'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import Title from 'grommet/components/Title'

// Icons
import ShareIcon from 'grommet/components/icons/base/Share'
import RedditIcon from 'grommet/components/icons/base/SocialReddit'
import FacebookIcon from 'grommet/components/icons/base/SocialFacebook'
import GithubIcon from 'grommet/components/icons/base/SocialGithub'
import TwitterIcon from 'grommet/components/icons/base/SocialTwitter'

// Form
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import TextInput from 'grommet/components/TextInput'

import Image from 'grommet/components/Image'

import Menu from 'grommet/components/Menu'

// Footer
import Footer from 'grommet/components/Footer'

export default class BasicApp extends Component {
    render() {
        return (
            <App centered={false}>
                <Header pad='medium' justify='between'>
                    <Box size='small'>
                        <Image src="/img/optimum-logo-title-dark.png" />
                    </Box>

                    <Menu direction='row' inline={true}>
                        <Button
                            href='https://ddx.optimum.network'
                            label='Derivatives Exchange Beta'
                            plain={true} />

                        {/* <Button
                            href='https://developers.optimum.network'
                            label='Token Exchange API'
                            plain={true} /> */}
                        {/* <Button
                            href='https://dtx.optimum.network'
                            label='Token Exchange'
                            plain={true} /> */}
                        <Button
                            href='https://medium.com/@optimum_network'
                            label='Blog'
                            plain={true} />
                    </Menu>
                </Header>

                <Box colorIndex='grey-1' style={{
                    backgroundImage: 'url("/img/finance.jpg")'
                }}>
                    <Box direction='row' justify='center' margin={{vertical: 'large' }}>
                        <Box pad='large' size='large'>
                            <Heading>Derivatives Exchange</Heading>

                            <Paragraph size='large'>
                                Optimum has developed the next generation
                                of derivatives exchange with our decentralized
                                derivatives exchange protocol (DDXP).
                            </Paragraph>

                            <Button
                                href='https://ddx.optimum.network'
                                target='_blank'
                                primary={true}
                                label='View Beta' />
                        </Box>

                        <Box style={{borderLeft: '1px dashed grey'}}>
                        </Box>

                        {/* <Box pad='large'>
                            <Box style={{borderTop: '1px dashed grey'}} />
                        </Box> */}

                        <Box pad='large' textAlign='right' size='large'>
                            <Heading>Derivatives Exchange API</Heading>

                            <Paragraph size='large'>
                                Optimum supplies a decentralized derivatives exchange API
                                based on our open-source token exchange protocol.
                                <br />
                                <br />
                                Our API is free to use and does not
                                involve any secondary protocol tokens.
                            </Paragraph>

                            <Button
                                target='_blank'
                                plain={true}
                                // icon={<ShareIcon />}
                                disabled={true}
                                label='Documentation Coming Soon' />
                        </Box>
                    </Box>
                </Box>

                <Box pad={{vertical: 'large'}} justify='center' direction='row'>
                    <Form>
                        <Heading>Contact Us</Heading>
                        <Paragraph>
                            Questions, comments, or concerns? Feel free to reach out.
                            <br />
                            <br />
                            You may prefer to message us on one of our social media
                            pages; the links are in the footer.
                        </Paragraph>
                        <FormField label='Name'>
                            <TextInput />
                        </FormField>
                        <FormField label='Email'>
                            <TextInput />
                        </FormField>
                        <FormField label='Message'>
                            <textarea />
                        </FormField>

                        <Button fill={true} href='https://developers.optimum.network'>
                            <Box textAlign='center' colorIndex='neutral-4' basis='full' flex={true} pad='medium'>
                                Submit
                            </Box>
                        </Button>
                    </Form>
                </Box>

                <Footer colorIndex='light-2' separator='top' direction='column'>
                    <Box pad='medium'>
                        <Menu justify='center' inline={true} direction='row'>
                            <Button target='_blank' icon={<RedditIcon />} href='https://reddit.com/r/OptimumNetwork' plain={true} />
                            <Button target='_blank' icon={<TwitterIcon />} href='https://reddit.com/r/OptimumNetwork' plain={true} />
                            <Button target='_blank' icon={<GithubIcon />} href='https://github.com/optimum-network' plain={true} />
                            <Button target='_blank' icon={<FacebookIcon />} href='https://reddit.com/r/OptimumNetwork' plain={true} />
                        </Menu>
                    </Box>

                    <Box full='horizontal' justify='around' pad='small' direction='row'>
                        <Box>
                            <img height="62px" width="190px" src="/img/optimum-logo-title-dark.png" />
                        </Box>

                        <Box>
                            <Paragraph>
                                © Crypto Asset Ventures 2018. All rights reserved.
                            </Paragraph>
                        </Box>
                    </Box>
                </Footer>
            </App>
        );
    }
}
