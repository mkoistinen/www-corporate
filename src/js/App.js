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
// import TelegramIcon from 'grommet/components/icons/base/SocialFacebook'
import SVGIcon from 'grommet/components/SVGIcon'
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

class TelegramIcon extends Component {
    render() {
        return <SVGIcon>
            <g stroke='#865CD6'
                strokeWidth='1'
                fill='none'
                strokeLinejoin='round'>
                <path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/>
            </g>
        </SVGIcon>
    }
}

export default class BasicApp extends Component {
    render() {
        return (
            <App centered={false}>
                <Box colorIndex='warning' textAlign='center' align='center'>
                    <Paragraph size='medium' style={{margin: '0.2em'}}>
                        <strong>
                            Looking for Optimum's <Anchor label='brand new demo?' />
                        </strong>
                    </Paragraph>
                </Box>
                <Box colorIndex='grey-1' full={true} style={{
                        backgroundImage: 'url("/img/finance.jpg")'
                    }}>
                    <Header style={{background: 'none'}} pad='medium' justify='between'>
                        <Box size='small'>
                            <Image src="/img/optimum-logo-title-light.png" />
                        </Box>

                        <Menu direction='row' inline={true}>

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
                                label='BLOG'
                                plain={true} />
                        </Menu>
                    </Header>

                    <Box>
                        <Box alignSelf='center' textAlign='center' pad='large' margin={{top: 'large'}} size='xlarge'>
                            <Heading tag='h1' strong={true}>
                                The next generation of financial derivatives.
                            </Heading>
                            <Paragraph size='large'>
                                <strong>
                                    Decentralized ERC20/ETH derivative contracts for the tokenized future.
                                </strong>
                            </Paragraph>

                            <Box align='center' pad='large'>
                                <Button
                                    href='https://ddx-demo.optimum.network'
                                    target='_blank'
                                    primary={true}
                                    label='TESTNET DEMO' />
                            </Box>


                            <Box pad='large'>
                                <Menu justify='center' inline={true} direction='row'>
                                    <Button target='_blank' icon={<RedditIcon />} href='https://reddit.com/r/OptimumNetwork' plain={true} />
                                    <Button target='_blank' icon={<TwitterIcon />} href='https://reddit.com/r/OptimumNetwork' plain={true} />
                                    <Button target='_blank' icon={<GithubIcon />} href='https://github.com/optimum-network' plain={true} />
                                    <Button target='_blank' icon={<TelegramIcon />} href='https://t.me/optimum' plain={true} />
                                </Menu>
                            </Box>

                        </Box>
                    </Box>
                </Box>

                <Box pad={{vertical: 'large', horizontal: 'small'}} justify='center' direction='row'>
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
                            {/* <Button target='_blank' icon={<FacebookIcon />} href='https://reddit.com/r/OptimumNetwork' plain={true} /> */}
                        </Menu>
                    </Box>

                    <Box full='horizontal' justify='around' pad='small' direction='row'>
                        <Box>
                            <Image size='small'  src="/img/optimum-logo-title-dark.png" />
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
