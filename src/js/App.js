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
import SVGIcon from 'grommet/components/SVGIcon'
import GithubIcon from 'grommet/components/icons/base/SocialGithub'
import TwitterIcon from 'grommet/components/icons/base/SocialTwitter'
import MediumIcon from 'grommet/components/icons/base/SocialMedium'

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

class SocialMenu extends Component {
    render() {
        return <Menu responsive={false} justify='center' inline={true} direction='row'>
            <Button target='_blank' icon={<RedditIcon />} href='https://reddit.com/r/OptimumNetwork' plain={true} />
            <Button target='_blank' icon={<TwitterIcon />} href='https://twitter.com/optimum_network' plain={true} />
            <Button target='_blank' icon={<GithubIcon />} href='https://github.com/optimum-network' plain={true} />
            <Button target='_blank' icon={<TelegramIcon />} href='https://t.me/optimum' plain={true} />
            <Button target='_blank' icon={<MediumIcon />} href='https://medium.com/@optimum_network' plain={true} />
        </Menu>
    }
}

export default class BasicApp extends Component {
    render() {

        const team = {
            chris: {
                name: 'Chris Perna',
                bio: `Chris leads Optimum’s Operations and Business Development efforts.
                    Chris' previous experience in growing both early stage startups and established
                    technology leaders brings a robust perspective to the decentralized technology market.
                    Chis has held positions at: LSI Logic, Integrated Devices Technologies,
                    Comcore Semiconductor ACT Networks, and NXP Semiconductor.`,
                image: 'chris',
                role: 'COO | FOUNDER'
            },
            brian: {
                name: 'Brian Wheeler',
                bio:  `Brian is responsible for Optimum's technology stack.
                        Building a platform with a fantastic user experience,
                        high level of availability, and gold-standard security
                        is at the center of Brian's mission.
                        Brian's interest in decentralized technology began in 2015, two years later
                        he discovered Ethereum and has been passionate about
                        developing decentralized technology ever since.
                    `,
                image: 'brian',
                role: 'CTO | FOUNDER'
            }
        }

        return (
            <App centered={false}>
                {/* <Box colorIndex='warning' textAlign='center' align='center'>
                    <Paragraph size='medium' style={{margin: '0.2em'}}>
                        <strong>
                            Looking for Optimum's <Anchor label='brand new release?' target='_blank' href='https://exchange.optimum.network' />
                        </strong>
                    </Paragraph>
                </Box> */}
                <Box colorIndex='grey-1' full={true} style={{
                        backgroundImage: 'url("/img/finance.jpg")'
                    }}>
                    <Header style={{background: 'none'}} pad='medium' justify='between'>
                        <Box size='small'>
                            <Image src="/img/optimum-logo-title-light.png" />
                        </Box>

                        <Menu direction='row' inline={true}>
                            <Button
                                style={{fontWeight: 'bolder', color: 'white'}}
                                href='#team'
                                label='TEAM'
                                plain={true} />
                            <Button
                                style={{fontWeight: 'bolder', color: 'white'}}
                                href='https://t.me/optimum'
                                target='_blank'
                                label='TELEGRAM'
                                plain={true} />

                            <Button
                                style={{fontWeight: 'bolder', color: 'white'}}
                                href='#contact'
                                label='CONTACT'
                                plain={true} />
                            <Button
                                style={{fontWeight: 'bolder', color: 'white'}}
                                href='https://medium.com/@optimum_network'
                                label='BLOG'
                                plain={true} />
                        </Menu>
                    </Header>

                    <Box>
                        <Box alignSelf='center' textAlign='center' pad='large' margin={{top: 'large'}} size='xlarge'>
                            <Heading tag='h1' strong={true}>
                                Decentralized options trading.
                            </Heading>
                            <Paragraph size='large'>
                                <strong>
                                    Peer-to-peer decentralized exchange for CALL and PUT options on ETH.
                                </strong>
                            </Paragraph>

                            <Box align='center' pad='large'>
                                <Button
                                    href='https://exchange.optimum.network'
                                    target='_blank'
                                    primary={true}
                                    label='START TRADING' />
                            </Box>


                            <Box pad='large'>
                                <SocialMenu />
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box id='roadmap' align='center' colorIndex='light-2'>
                    <Box size='xxlarge' pad='large' align='center'>
                        <img src='img/roadmap.png' />
                    </Box>
                </Box>

                <Box id='tutorial' align='center' colorIndex='neutral-4' pad='large'>
                    <Heading strong={true}>Beta Tutorial</Heading>
                    <iframe style={{border: 0}} src="https://drive.google.com/file/d/1fqQZjJ91TVSdPgyz3XrF7JfvGmMdt6BX/preview" width="640" height="480"></iframe>
                </Box>

                <Box id='team' align='center' colorIndex='neutral-1-a' pad='large'>
                    <Box size='xxlarge'>
                        <Heading strong={true}>Team</Heading>
                        <Box direction='row' justify='around'>
                            <TeamMember info={team.brian} />
                            <TeamMember info={team.chris} />
                        </Box>
                    </Box>
                </Box>

                <Box id='contact' full={true} align='center' pad={{vertical: 'large', horizontal: 'small'}} justify='center' direction='row'>
                    <Form method='post'>
                        {/* Netlify form config */}
                        <input type="hidden" name="form-name" value="contact" />

                        <Heading>Contact Us</Heading>
                        <Paragraph>
                            Interested in Optimum? We'd love to hear from you.
                            <br />
                            <br />
                            You may prefer to message us on one of our social media
                            pages; the links are in the footer.
                        </Paragraph>
                        <FormField label='Name'>
                            <TextInput name='name' />
                        </FormField>
                        <FormField label='Email'>
                            <TextInput type='email' name='email' />
                        </FormField>
                        <FormField label='Message'>
                            <textarea rows='4' name='message' />
                        </FormField>

                        <Button fill={true} type='submit' style={{border: 0}}>
                            <Box margin={{top: 'small'}} textAlign='center' colorIndex='neutral-4' basis='full' flex={true} pad='medium'>
                                Submit
                            </Box>
                        </Button>
                    </Form>
                </Box>

                <Footer colorIndex='grey-2' direction='column'>
                    <Box pad='medium'>
                        <SocialMenu />
                    </Box>

                    <Box full='horizontal' justify='around' pad='small' direction='row'>
                        <Box>
                            <Image size='small'  src="/img/optimum-logo-title-light.png" />
                        </Box>

                        <Box>
                            <Paragraph>
                                © DECENTRALIZED TECHNOLOGY VENTURES 2018. ALL RIGHTS RESERVED.
                            </Paragraph>
                        </Box>
                    </Box>

                    <Box align='center' textAlign='center' pad='small'>
                        <small>
                            Cover photo provided by Andreas Poike via Flickr. <Anchor href='https://www.flickr.com/photos/andreas_poike' label='https://www.flickr.com/photos/andreas_poike' />
                        </small>
                    </Box>
                </Footer>
            </App>
        );
    }
}

class TeamMember extends Component {
    render() {
        const { info: { name, image, bio, role } } = this.props

        return <Box size='medium'>
            <Box align='center'>
                <Box>
                    <Image style={{borderRadius: '50%', filter: 'grayscale(100%)'}} size='small' src={`img/team/${image}.jpg`} />
                </Box>
                <span style={{fontSize: '1.5em'}}>
                    <b>{name}</b>
                </span>
                <span>
                    {role}
                </span>
            </Box>
            <Box pad='small'>
                <span>
                    {bio}
                </span>
            </Box>
        </Box>
    }
}