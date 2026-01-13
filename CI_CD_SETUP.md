# CI/CD Setup Guide

This project includes GitHub Actions workflows for continuous integration and deployment.

## Workflows

### 1. `deploy.yml` - Build and Deploy
- **Triggers**: 
  - Push to `main` or `master` branch
  - Pull requests to `main` or `master`
  - Manual trigger via GitHub Actions UI
- **Jobs**:
  - **Build**: Installs dependencies, runs tests, builds the project
  - **Deploy**: Deploys to GitHub Pages (default) or other platforms

### 2. `ci.yml` - Continuous Integration
- **Triggers**: 
  - Push to `main`, `master`, or `develop` branches
  - Pull requests to `main` or `master`
- **Jobs**:
  - Runs linter, tests, and builds the project
  - Validates build output

## Setup Instructions

### Option 1: Deploy to GitHub Pages (Default)

1. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Source: Select "GitHub Actions"

2. **Update `package.json`** (if needed):
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio"
   }
   ```

3. The workflow is ready to use! Push to `main` or `master` branch to trigger deployment.

### Option 2: Deploy to Netlify

1. **Get Netlify credentials**:
   - Create a Netlify account
   - Go to Site settings → Build & deploy → Continuous Deployment
   - Get your Site ID and create an Auth Token

2. **Add GitHub Secrets**:
   - Go to repository Settings → Secrets and variables → Actions
   - Add:
     - `NETLIFY_AUTH_TOKEN`: Your Netlify auth token
     - `NETLIFY_SITE_ID`: Your Netlify site ID

3. **Update `deploy.yml`**:
   - Uncomment the Netlify deployment section
   - Comment out the GitHub Pages section

### Option 3: Deploy to Vercel

1. **Get Vercel credentials**:
   - Create a Vercel account
   - Create a new project
   - Get your Project ID and Organization ID

2. **Add GitHub Secrets**:
   - `VERCEL_TOKEN`: Your Vercel token
   - `VERCEL_ORG_ID`: Your Vercel organization ID
   - `VERCEL_PROJECT_ID`: Your Vercel project ID

3. **Update `deploy.yml`**:
   - Uncomment the Vercel deployment section
   - Comment out the GitHub Pages section

### Option 4: Deploy to AWS S3 + CloudFront

1. **Set up AWS**:
   - Create an S3 bucket
   - Set up CloudFront distribution
   - Create IAM user with S3 and CloudFront permissions

2. **Add GitHub Secrets**:
   - `AWS_ACCESS_KEY_ID`: Your AWS access key
   - `AWS_SECRET_ACCESS_KEY`: Your AWS secret key
   - `S3_BUCKET_NAME`: Your S3 bucket name
   - `CLOUDFRONT_DISTRIBUTION_ID`: Your CloudFront distribution ID

3. **Update `deploy.yml`**:
   - Uncomment the AWS deployment section
   - Comment out the GitHub Pages section

### Option 5: Deploy via SSH

1. **Add GitHub Secrets**:
   - `HOST`: Your server hostname/IP
   - `USERNAME`: SSH username
   - `SSH_KEY`: Your private SSH key
   - `PORT`: SSH port (default: 22)

2. **Update `deploy.yml`**:
   - Uncomment the SSH deployment section
   - Comment out the GitHub Pages section

## Manual Deployment

You can manually trigger the deployment workflow:
1. Go to Actions tab in your repository
2. Select "Build and Deploy" workflow
3. Click "Run workflow"
4. Select branch and click "Run workflow"

## Troubleshooting

### Build fails
- Check Node.js version compatibility
- Ensure all dependencies are in `package.json`
- Check for TypeScript/ESLint errors

### Deployment fails
- Verify GitHub Secrets are set correctly
- Check deployment platform credentials
- Review workflow logs in Actions tab

### GitHub Pages not updating
- Ensure GitHub Pages is enabled in repository settings
- Check that the workflow has write permissions
- Verify `homepage` field in `package.json` matches your GitHub Pages URL

## Branch Strategy

- **main/master**: Production deployments
- **develop**: Development builds and testing
- **feature branches**: CI validation only (no deployment)

## Customization

To customize the workflows:
1. Edit `.github/workflows/deploy.yml` or `.github/workflows/ci.yml`
2. Adjust Node.js version, build commands, or deployment steps as needed
3. Add additional jobs or steps as required
