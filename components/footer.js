import { Box, Heading, Container, Text, Link } from 'theme-ui'
import Flag from '../components/flag'

export default () => (
  <Box
    as="footer"
    sx={{
      py: 5,
      bg: 'sunken',
      color: 'secondary',
      textAlign: 'center',
      fontSize: 1,
      position: 'relative'
    }}
  >
    <Flag />
    <Container variant="narrow">
      <Heading
        variant="headline"
        sx={{ color: 'primary', fontSize: [3, 4], mt: 0, mb: 3 }}
      >
        This website was made by the {' '}
        <Link href="https://hackclub.com/">Hack&nbsp;Club</Link>
        {' '} Quaranteam
      </Heading>
      <Text sx={{ mb: 3 }}>
        Remixed by <Link href="https://iamcpdev.me">@iamcpdev + @HQ</Link>
      </Text>
      <Text sx={{ mb: 3 }}>
      <Link href="https://hack.af/cgh">Original Site</Link> by <Link href="https://lachlanjc.me">@lachlanjc</Link>
      </Text>
      <Text>
        <Link href="https://github.com/hackclub/takeover">
          Open source on GitHub
        </Link>
      </Text>
    </Container>
  </Box>
)
