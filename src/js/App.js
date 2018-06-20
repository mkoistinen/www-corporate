import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Anchor from 'grommet/components/Anchor';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
// import Title from 'grommet/components/Title';

// Icons
// import ActionIcon from 'grommet/components/icons/base/Action';
// import ShareIcon from 'grommet/components/icons/base/Share';
import GithubIcon from 'grommet/components/icons/base/SocialGithub';
import LinkedInIcon from 'grommet/components/icons/base/SocialLinkedIn';
import MediumIcon from 'grommet/components/icons/base/SocialMedium';
import RedditIcon from 'grommet/components/icons/base/SocialReddit';
import SVGIcon from 'grommet/components/SVGIcon';
import TwitterIcon from 'grommet/components/icons/base/SocialTwitter';

// Form
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';

import Image from 'grommet/components/Image';

import Menu from 'grommet/components/Menu';

// Footer
import Footer from 'grommet/components/Footer';

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
    return (
      <Menu
        responsive={false}
        justify='center'
        inline={true}
        direction='row'>
        <Button
          target='_blank'
          icon={<RedditIcon />}
          href='https://reddit.com/r/OptimumNetwork'
          plain={true} />
        <Button
          target='_blank'
          icon={<TwitterIcon />}
          href='https://twitter.com/optimum_network'
          plain={true} />
        <Button
          target='_blank'
          icon={<GithubIcon />}
          href='https://github.com/optimum-network'
          plain={true} />
        <Button
          target='_blank'
          icon={<TelegramIcon />}
          href='https://t.me/optimum'
          plain={true} />
        <Button
          target='_blank'
          icon={<MediumIcon />}
          href='https://medium.com/@optimum_network'
          plain={true} />
      </Menu>
    );
  }
}

class TeamMember extends Component {
  render() {
    const { info: { name, image, bio, role, linkedin } } = this.props;

    return (
      <Box size='medium' className='team-box'>
        <Box>
          <Box className='meta-heading'>
            <Image
              className='meta-image'
              size='small'
              src={`img/team/${image}.jpg`} />
            <Box className='meta-box'>
              <span className='meta-name'>{name}</span>
              <span className='meta-role'>{role}</span>
            </Box>
          </Box>
        </Box>
        <Box pad='small'>
          <span className='meta-bio'>{bio}</span>
        </Box>
        <Box className='meta-link' align='center'>
          <Anchor target='_blank' href={linkedin}>
            <LinkedInIcon size='medium' colorIndex='grey-1' />
          </Anchor>
        </Box>
      </Box>
    );
  }
}

TeamMember.propTypes = {
  info: PropTypes.object.isRequired
};

export default class BasicApp extends Component {
  render() {
    const team = {
      brian: {
        name: 'Brian Wheeler',
        bio: 'Brian is responsible for Optimum’s technology stack. Building a platform with a fantastic user experience, high level of availability, and gold-standard security is at the center of Brian’s mission.',
        image: 'brian',
        role: 'CTO | FOUNDER',
        linkedin: 'https://www.linkedin.com/in/brian-wheeler-74ab3753/'
      },
      chris: {
        name: 'Chris Perna',
        bio: 'Chris leads Optimum’s Operations and Business Development efforts. Chris’ previous experience in growing both early stage startups and established technology leaders brings a robust perspective to the decentralized technology market.',
        image: 'chris',
        role: 'COO | FOUNDER',
        linkedin: ''
      },
      martin: {
        name: 'Martin Koistinen',
        bio: 'Martin is a 25+ year veteran software engineer whose experience spans Blockchain, Biometrics, Cryptography, Finance, Information Security, Machine Learning, Risk Management, Sustainability, and more.',
        image: 'martin',
        role: 'Advisor | Developer',
        linkedin: 'https://www.linkedin.com/in/mkoistinen/'
      }
    };

    return (
      <App centered={false}>
        {/* <Box colorIndex='warning' textAlign='center' align='center'>
          <Paragraph size='medium' style={{ margin: '0.2em' }}>
          <strong>
          Looking for Optimum's <Anchor label='brand new release?' target='_blank' href='https://exchange.optimum.network' />
          </strong>
          </Paragraph>
        </Box> */}
        <Box colorIndex='light-1' full={true}>
          <Header
            className='header'
            colorIndex='light-1'
            pad='medium'
            justify='between'>

            <Box size='small'>
              <Image src='/img/optimum-logo-title-dark.png' />
            </Box>

            <Menu className='primary-menu' direction='row' inline={true}>
              <Button
                href='#team'
                label='TEAM'
                plain={true} />

              <Button
                className='external-link'
                href='https://t.me/optimum'
                target='_blank'
                label='TELEGRAM'
                plain={true} />

              <Button
                href='#contact'
                label='CONTACT'
                plain={true} />

              <Button
                className='external-link'
                href='https://medium.com/@optimum_network'
                label='BLOG'
                plain={true} />
            </Menu>
          </Header>

          <Box
            className='hero-section'
            pad='large'
            margin={{ top: 'large' }}
            basis='full'>

            <Box size='xxlarge'>
              <Heading
                tag='h1'
                className='main-header'
                strong={true}>
                Decentralized options trading.
              </Heading>
              <Heading tag='h2' className='main-subheader'>
                Peer-to-peer decentralized exchange for CALL and PUT options on ETH.
              </Heading>

              <Box direction='row'>
                <Box margin={{ right: 'large', top: 'medium' }}>
                  <Button
                    className='action-btn'
                    href='/#tutorial'
                    label='Learn More' />
                </Box>
                <Box margin={{ right: 'large', top: 'medium' }}>
                  <Button
                    className='action-btn'
                    href='https://exchange.optimum.network'
                    target='_blank'
                    primary={true}
                    label='Start Trading' />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          id='team'
          align='center'
          pad='large'
          colorIndex='light-2'
        >
          <Box size='xxlarge'>
            <Heading className='section-header'>Our Team</Heading>
            <Box direction='row' justify='around'>
              <TeamMember info={team.brian} />
              <TeamMember info={team.chris} />
              <TeamMember info={team.martin} />
            </Box>
          </Box>
        </Box>

        <Box
          id='roadmap'
          align='center'
          colorIndex='light-1'
        >
          <Box size='xxlarge' pad='large' align='center'>
            <Heading className='section-header'>Roadmap</Heading>
            <img src='img/roadmap.png' alt='roadmap' />
          </Box>
        </Box>

        <Box
          id='tutorial'
          align='center'
          pad='large'
          colorIndex='light-2'
          pad='large'>
          <Heading className='section-header'>
            How It Works
          </Heading>
          <iframe
            title='preview'
            style={{ border: 0 }}
            src='https://drive.google.com/file/d/1fqQZjJ91TVSdPgyz3XrF7JfvGmMdt6BX/preview'
            width='640'
            height='480'
          />
        </Box>

        <Box
          id='contact'
          colorIndex='light-1'
          align='center'
          pad='large'
          direction='column'>

          <Box align='center'>
            <Heading className='section-header'>Contact Us</Heading>
            <Heading tag='h2' className='section-subheader'>
              Interested in Optimum? We&rsquo;d love to hear from you.
            </Heading>
          </Box>

          <Box padding='large'>
            <Form method='post' plain={true}>
              {/* Netlify form config */}
              <Paragraph>
                You may prefer to message us on one of our social media
                pages; the links are in the footer.
              </Paragraph>
              <input
                type='hidden'
                name='form-name'
                value='contact' />
              <FormField label='Name'>
                <TextInput name='name' />
              </FormField>
              <FormField label='Email'>
                <TextInput type='email' name='email' />
              </FormField>
              <FormField label='Message'>
                <textarea rows='4' name='message' />
              </FormField>
              <Box direction='row' pad={{ vertical: 'small' }}>
                <Button
                  className='action-btn'
                  primary={true}
                  label='Submit'
                  type='submit'
                />
              </Box>
            </Form>
          </Box>
        </Box>

        <Footer colorIndex='neutral-4-a' direction='column'>
          <Box pad='medium'>
            <SocialMenu />
          </Box>

          <Box
            full='horizontal'
            justify='around'
            pad='small'
            direction='row'>
            <Box>
              <Image
                size='small'
                src='/img/optimum-logo-title-light.png' />
            </Box>

            <Box>
              <Paragraph>
                &copy; DECENTRALIZED TECHNOLOGY VENTURES 2018. ALL RIGHTS RESERVED.
              </Paragraph>
            </Box>
          </Box>
        </Footer>
      </App>
    );
  }
}
