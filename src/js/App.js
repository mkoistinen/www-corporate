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
import ActionIcon from 'grommet/components/icons/base/Action'
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
    return (
      <SVGIcon>
        <g
          stroke='#865CD6'
          strokeWidth='0.5'
          fill='none'
          strokeLinejoin='round'>
          <path d='M23.8,5l-3.6,17c-0.3,1.2-1,1.5-2,0.9l-5.5-4.1l-2.7,2.6C9.8,21.8,9.6,22,9,
            22l0.4-5.6l10.2-9.2C20,6.8,19.5,6.6,18.9,7L6.3,14.9l-5.4-1.7c-1.2-0.4-1.2-1.2,
            0.2-1.7l21.2-8.2C23.3,2.9,24.2,3.5,23.8,5z' />
        </g>
      </SVGIcon>
    );
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
                <Box colorIndex='light-1' full={true} style={{
                        // backgroundImage: 'url("/img/finance.jpg")'
                    }}>
                    <Header style={{background: 'none'}} pad='medium' justify='between'>
                        <Box size='small'>
                            <Image src="/img/optimum-logo-title-dark.png" />
                        </Box>

                        <Menu direction='row' inline={true}>
                            <Button
                                // style={{fontWeight: 'bolder', color: 'white'}}
                                href='#team'
                                label='TEAM'
                                plain={true} />
                            <Button
                                // style={{fontWeight: 'bolder', color: 'white'}}
                                href='https://t.me/optimum'
                                target='_blank'
                                label='TELEGRAM'
                                plain={true} />

                            <Button
                                // style={{fontWeight: 'bolder', color: 'white'}}
                                href='#contact'
                                label='CONTACT'
                                plain={true} />
                            <Button
                                // style={{fontWeight: 'bolder', color: 'white'}}
                                href='https://medium.com/@optimum_network'
                                label='BLOG'
                                plain={true} />
                        </Menu>
                    </Header>

                    <Box pad='large' margin={{top: 'large'}} basis='full' style={{backgroundImage: "url('/img/triangle-bg.png')", backgroundSize: 'contain'}}>
                        <Box size='xxlarge'>
                            <Heading tag='h1' className='main-heading' strong={true}>
                                Decentralized options trading.
                            </Heading>
                            <Paragraph size='large'>
                                <b>
                                    Peer-to-peer decentralized exchange for CALL and PUT options on ETH.
                                </b>
                            </Paragraph>

                            <Box direction='row'>
                                <Box margin={{right: 'large', top: 'medium'}}>
                                    <Button href='/' label='LEARN MORE' />
                                </Box>
                                <Box margin={{right: 'large', top: 'medium'}}>
                                    <Button href='https://exchange.optimum.network' target='_blank' primary={true} label='START TRADING' />
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* <Box>
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
                    </Box> */}
                </Box>

                <Box id='roadmap' align='center' colorIndex='light-2'>
                    {/* <Box direction='row' size='xxlarge' justify='around' align='center'>
                        <Box size='medium'>
                            <Box responsive={false} colorIndex='neutral-3-a' direction='row' justify='between' align='center' pad={{horizontal: 'small'}}>
                                <Box pad={{vertical: 'small'}}>
                                    Q3: API RELEASE
                                </Box>
                                <ActionIcon />
                            </Box>
                            <Box colorIndex='light-1' pad={{vertical: 'small'}}>
                                <ul>
                                    <li>Programmable API for algorithmic traders</li>
                                </ul>
                            </Box>
                        </Box>
                        <Box colorIndex='neutral-3-a' style={{borderRadius: '50%', padding: '4px', height: '60px', width: '60px'}}>
                            <Box colorIndex='light-1' style={{width: '100%', height: '100%', borderRadius: '50%'}} align='center' justify='center'>
                                Q3
                            </Box>
                        </Box>
                        <Box size='medium'>
                        </Box>
                    </Box> */}
                    <Box size='xxlarge' pad='large' align='center'>
                        <Heading tag='h2'>Roadmap</Heading>
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