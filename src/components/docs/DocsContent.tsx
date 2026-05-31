import {
  systemRequirements,
  supportedSources,
  exportFormats,
  keyboardShortcuts,
  faqLicense,
  faqTroubleshooting,
  changelog,
} from '../../data/docsData';

// ============================================
// REUSABLE COMPONENTS
// ============================================

function Callout({ type, title, children }: { type: 'info' | 'tip'; title: string; children: React.ReactNode }) {
  return (
    <div className={`callout callout-${type}`}>
      <strong>{title}</strong>
      <p>{children}</p>
    </div>
  );
}

function StepsList({ steps }: { steps: React.ReactNode[] }) {
  return (
    <ol className="steps-list">
      {steps.map((step, i) => (
        <li key={i}>{step}</li>
      ))}
    </ol>
  );
}

// ============================================
// MAIN CONTENT
// ============================================

export function DocsContent() {
  return (
    <main className="docs-content">
      <div className="docs-container">
        {/* ========== INSTALLATION ========== */}
        <section id="installation">
          <h1>Installation</h1>
          <p className="lead">Get Manhwa Studio up and running in minutes.</p>

          <h2>System Requirements</h2>
          <div className="requirements-grid">
            {systemRequirements.map((req) => (
              <div key={req.platform} className="requirement-card">
                <h4>{req.platform}</h4>
                <ul>
                  {req.requirements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2>Download & Install</h2>
          <StepsList
            steps={[
              <>
                <strong>Download the installer</strong> for your operating system from the{' '}
                <a href="/#download">download page</a>.
              </>,
              <>
                <strong>Run the installer:</strong>
                <ul>
                  <li><strong>Windows:</strong> Double-click the .exe file and follow the installation wizard.</li>
                  <li><strong>macOS:</strong> Open the .dmg file and drag Manhwa Studio to your Applications folder.</li>
                  <li><strong>Linux:</strong> Make the AppImage executable and run it, or install the .deb package.</li>
                </ul>
              </>,
              <><strong>Launch Manhwa Studio</strong> and complete the initial setup wizard.</>,
            ]}
          />

          <Callout type="info" title="First Launch">
            On first launch, you'll be asked to select a folder where your projects will be stored.
            Choose a location with enough disk space for your manga library.
          </Callout>
        </section>

        {/* ========== FIRST DOWNLOAD ========== */}
        <section id="first-download">
          <h1>Your First Download</h1>
          <p className="lead">Let's download your first manga chapter in under a minute.</p>

          <StepsList
            steps={[
              <><strong>Copy a manga URL</strong> from any supported source (e.g., MangaDex, AsuraScans).</>,
              <><strong>Paste the URL</strong> in the download input field.</>,
              <><strong>Enable "Detect Panels"</strong> if you want automatic panel separation.</>,
              <><strong>Click "Download"</strong> and wait for the process to complete.</>,
              <><strong>Review the panels</strong> in the editor and make any adjustments.</>,
              <><strong>Export</strong> to your preferred format (images, PDF, or CBZ).</>,
            ]}
          />

          <Callout type="tip" title="Pro Tip">
            For batch downloads, paste the manga series URL (not chapter URL) and specify a chapter range
            like "1-10" to download multiple chapters at once.
          </Callout>
        </section>

        {/* ========== INTERFACE OVERVIEW ========== */}
        <section id="interface-overview">
          <h1>Interface Overview</h1>
          <p className="lead">Understand the Manhwa Studio workspace.</p>

          <div className="interface-diagram">
            <div className="diagram-placeholder">
              <div className="diagram-part sidebar-part"><span>1</span>Toolbar</div>
              <div className="diagram-part main-part"><span>2</span>Canvas / Editor</div>
              <div className="diagram-part right-part"><span>3</span>Properties Panel</div>
            </div>
          </div>

          <h3>1. Toolbar</h3>
          <p>Contains all your editing tools: selection, crop, split, brush, text, and shapes. Click a tool to activate it.</p>

          <h3>2. Canvas / Editor</h3>
          <p>The main workspace where your panels are displayed. Drag to reorder, click to select, and use tools to edit.</p>

          <h3>3. Properties Panel</h3>
          <p>Shows options for the currently selected tool or panel. Adjust settings like brush size, text properties, or export options here.</p>
        </section>

        {/* ========== DOWNLOADING ========== */}
        <section id="downloading">
          <h1>Downloading Manga</h1>
          <p className="lead">Learn the different ways to get content into Manhwa Studio.</p>

          <h2>Single Chapter Download</h2>
          <p>The simplest way to download:</p>
          <StepsList
            steps={[
              'Copy the chapter URL from a supported manga website.',
              'Paste it into the URL input field.',
              'Click "Download" to start.',
            ]}
          />

          <h2>Batch Download</h2>
          <p>Download multiple chapters at once:</p>
          <StepsList
            steps={[
              'Copy the manga series URL (the main page, not a specific chapter).',
              'Paste it into the URL input field.',
              'Enter a chapter range (e.g., "1-10", "5-15", or "1,3,5,7").',
              'Click "Batch Download" to queue all chapters.',
            ]}
          />

          <h2>Upload Your Own Images</h2>
          <p>You can also work with local images:</p>
          <StepsList
            steps={[
              'Click the "Upload" button in the toolbar.',
              'Select one or more image files from your computer.',
              'Images will be added to your current workspace.',
            ]}
          />
        </section>

        {/* ========== PANEL DETECTION ========== */}
        <section id="panel-detection">
          <h1>Panel Detection</h1>
          <p className="lead">Automatic separation of long-strip manhwa into individual panels.</p>

          <h2>How It Works</h2>
          <p>Our algorithm analyzes the image for horizontal white spaces (gutters) that typically separate panels in manhwa. It then splits the image at these points.</p>

          <h2>Enable/Disable Detection</h2>
          <p>Toggle the "Detect Panels" option before downloading. If disabled, images will be imported as-is without splitting.</p>

          <h2>Manual Splitting</h2>
          <p>For images that weren't split correctly:</p>
          <StepsList
            steps={[
              'Select the panel you want to split.',
              'Activate the Split tool from the toolbar.',
              'Click where you want to create split lines.',
              'Press Enter or click "Apply Split" to confirm.',
            ]}
          />

          <Callout type="info" title="Note">
            Panel detection works best with traditional manhwa format (vertical long strips with clear white gutters).
            Manga pages with complex layouts may require manual adjustment.
          </Callout>
        </section>

        {/* ========== EDITING ========== */}
        <section id="editing">
          <h1>Editing Panels</h1>
          <p className="lead">Professional tools for refining your panels.</p>

          <h2>Selection & Reordering</h2>
          <ul>
            <li><strong>Click</strong> a panel to select it.</li>
            <li><strong>Ctrl/Cmd + Click</strong> to select multiple panels.</li>
            <li><strong>Drag</strong> panels to reorder them.</li>
            <li><strong>Delete</strong> key removes selected panels.</li>
          </ul>

          <h2>Cropping</h2>
          <StepsList
            steps={[
              'Select a panel.',
              'Activate the Crop tool.',
              'Drag the crop handles to define the area.',
              'Press Enter to apply.',
            ]}
          />

          <h2>Adding Text</h2>
          <StepsList
            steps={[
              'Activate the Text tool.',
              'Click on a panel where you want to add text.',
              'Type your text and adjust properties (font, size, color).',
              'Drag to reposition.',
            ]}
          />

          <h2>Brush Tool</h2>
          <p>Use the brush tool for freehand drawing or to cover/redact areas:</p>
          <ul>
            <li>Adjust brush size in the properties panel.</li>
            <li>Choose a color.</li>
            <li>Draw directly on panels.</li>
          </ul>

          <h2>Shapes</h2>
          <p>Add rectangles, circles, and arrows for annotations:</p>
          <StepsList
            steps={[
              'Activate the Shape tool.',
              'Select a shape type.',
              'Click and drag on a panel to draw.',
            ]}
          />
        </section>

        {/* ========== EXPORTING ========== */}
        <section id="exporting">
          <h1>Exporting Your Work</h1>
          <p className="lead">Save your panels in various formats.</p>

          <h2>Select Panels to Export</h2>
          <p>By default, all panels are selected. To export specific panels:</p>
          <ul>
            <li>Hold Ctrl/Cmd and click to toggle individual panel selection.</li>
            <li>Use "Select All" or "Deselect All" buttons.</li>
          </ul>

          <h2>Export Formats</h2>

          <h3>Images (ZIP)</h3>
          <p>Exports selected panels as individual PNG images in a ZIP archive.</p>

          <h3>PDF</h3>
          <p>Creates a PDF document with one panel per page. Great for printing or reading on tablets.</p>

          <h3>CBZ</h3>
          <p>Comic Book Archive format, compatible with comic reader apps like CDisplayEx, ComicRack, etc.</p>

          <h3>Video Frames</h3>
          <p>Exports panels as video frames (1080p or 4K). Useful for creating TikTok-style scrolling videos.</p>

          <Callout type="tip" title="Pro Tip">
            All your edits (text, brush strokes, shapes) are included in the export. What you see is what you get!
          </Callout>
        </section>

        {/* ========== PROJECTS ========== */}
        <section id="projects">
          <h1>Managing Projects</h1>
          <p className="lead">Organize your work with the project system.</p>

          <h2>Creating a Project</h2>
          <StepsList
            steps={[
              'Click "New Project" from the home screen.',
              'Enter a project name.',
              'Start downloading or uploading content.',
            ]}
          />

          <h2>Project Auto-Save</h2>
          <p>All changes are automatically saved to your project. This includes:</p>
          <ul>
            <li>Downloaded/uploaded images</li>
            <li>Panel selections</li>
            <li>Text overlays, brush strokes, and shapes</li>
            <li>Panel order</li>
          </ul>

          <h2>Project Files</h2>
          <p>Each project is stored in your projects folder with this structure:</p>
          <pre><code>{`YourProject/
├── project.json      # Project metadata
├── panels/           # Panel images
└── exports/          # Exported files`}</code></pre>
        </section>

        {/* ========== SUPPORTED SOURCES ========== */}
        <section id="supported-sources">
          <h1>Supported Sources</h1>
          <p className="lead">List of websites you can download from.</p>

          <div className="sources-table">
            <table>
              <thead>
                <tr>
                  <th>Source</th>
                  <th>URL Pattern</th>
                  <th>Batch Support</th>
                </tr>
              </thead>
              <tbody>
                {supportedSources.map((source) => (
                  <tr key={source.name}>
                    <td>{source.name}</td>
                    <td>{source.url}</td>
                    <td>{source.batchSupport ? 'Yes' : 'No'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Callout type="info" title="Requesting New Sources">
            Need support for another website? Contact us with the URL and we'll consider adding it in a future update.
          </Callout>
        </section>

        {/* ========== EXPORT FORMATS ========== */}
        <section id="export-formats">
          <h1>Export Formats</h1>
          <p className="lead">Detailed information about each export option.</p>

          <div className="format-cards">
            {exportFormats.map((format) => (
              <div key={format.name} className="format-card">
                <h3>{format.name}</h3>
                <p>{format.description}</p>
                <ul>
                  <li>Best for: {format.bestFor}</li>
                  <li>{format.details}</li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ========== KEYBOARD SHORTCUTS ========== */}
        <section id="keyboard-shortcuts">
          <h1>Keyboard Shortcuts</h1>
          <p className="lead">Speed up your workflow with these shortcuts.</p>

          <div className="shortcuts-table">
            <table>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Windows/Linux</th>
                  <th>macOS</th>
                </tr>
              </thead>
              <tbody>
                {keyboardShortcuts.map((shortcut) => (
                  <tr key={shortcut.action}>
                    <td>{shortcut.action}</td>
                    <td>{shortcut.windows}</td>
                    <td>{shortcut.mac}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========== FAQ LICENSE ========== */}
        <section id="faq-license">
          <h1>License & Activation FAQ</h1>

          <div className="faq-list">
            {faqLicense.map((item) => (
              <div key={item.question} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========== FAQ TROUBLESHOOTING ========== */}
        <section id="faq-troubleshooting">
          <h1>Troubleshooting FAQ</h1>

          <div className="faq-list">
            {faqTroubleshooting.map((item) => (
              <div key={item.question} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
                {item.tips && (
                  <ul>
                    {item.tips.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="faq-item" id="support">
              <h3>Need more help?</h3>
              <p>Contact us at <a href="mailto:chanudomvathana.tork@gmail.com">chanudomvathana.tork@gmail.com</a> with:</p>
              <ul>
                <li>Your operating system and version</li>
                <li>Manhwa Studio version number</li>
                <li>Description of the issue</li>
                <li>Steps to reproduce (if applicable)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========== CHANGELOG ========== */}
        <section id="version-1-0">
          <h1>Changelog</h1>

          {changelog.map((entry) => (
            <div key={entry.version} className="changelog-entry">
              <h2>
                Version {entry.version} <span className="changelog-date">{entry.date}</span>
              </h2>
              <p>{entry.description}</p>

              <h4>Features</h4>
              <ul>
                {entry.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
