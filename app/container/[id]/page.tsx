import { getContainerById, containers } from '../../data/sample-containers';
import ContainerView from '../../components/ContainerView';
import Link from 'next/link';

// Generate static params for all containers
export function generateStaticParams() {
  return containers.map((container) => ({
    id: container.id,
  }));
}

// Generate metadata for each container page
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const container = getContainerById(id);
  
  if (!container) {
    return { title: 'Not Found' };
  }
  
  return {
    title: `${container.name} - Delta Green Archive`,
    description: container.description,
  };
}

export default async function ContainerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const container = getContainerById(id);

  if (!container) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <div className="window" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div className="window-header">
            <span>⚠️ Error</span>
          </div>
          <div style={{ padding: '40px', background: '#ece9d8' }}>
            <h2 style={{ marginBottom: '16px', fontSize: '16px' }}>Container Not Found</h2>
            <p style={{ marginBottom: '24px', fontSize: '12px', color: '#545454' }}>
              The requested container could not be located in the archive system.
              It may have been moved, deleted, or you may not have access.
            </p>
            <Link 
              href="/"
              style={{ 
                color: '#0000ff', 
                textDecoration: 'underline',
                fontSize: '12px'
              }}
            >
              Return to Archive Index
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <ContainerView container={container} />;
}
