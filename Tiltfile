docker_compose("docker-compose.yml")
docker_build(
    'leeshan/blog',
    context='.',
    live_update=[
        sync('./','/src/'),
    ]
)