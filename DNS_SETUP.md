# GitHub Pages Custom Domain Setup

## Domain: muradhossen.portfolio.com

### Step 1: Create CNAME File
✅ A `CNAME` file has been created in the `public/` folder with your domain name.

### Step 2: Configure DNS Records

Since `muradhossen.portfolio.com` is a **subdomain**, you need to add a **CNAME record** in your DNS provider.

#### Option A: Using CNAME Record (Recommended for Subdomains)

1. **Go to your DNS provider** (where you manage portfolio.com):
   - This could be your domain registrar (GoDaddy, Namecheap, etc.)
   - Or a DNS service (Cloudflare, AWS Route 53, etc.)

2. **Add a CNAME record**:
   ```
   Type: CNAME
   Name: muradhossen
   Value: yourusername.github.io
   TTL: 3600 (or default)
   ```

   **Important**: Replace `yourusername` with your actual GitHub username!

   Example:
   - If your GitHub username is `Mrcodehunter`
   - The CNAME value should be: `mrcodehunter.github.io`

#### Option B: Using A Records (Alternative, but not recommended for subdomains)

If CNAME doesn't work, you can use A records pointing to GitHub's IP addresses:

```
Type: A
Name: muradhossen
Value: 185.199.108.153
TTL: 3600

Type: A
Name: muradhossen
Value: 185.199.109.153
TTL: 3600

Type: A
Name: muradhossen
Value: 185.199.110.153
TTL: 3600

Type: A
Name: muradhossen
Value: 185.199.111.153
TTL: 3600
```

**Note**: GitHub's IP addresses may change. CNAME is preferred.

### Step 3: Configure GitHub Pages

1. **Go to your repository on GitHub**
2. **Navigate to**: Settings → Pages
3. **Under "Custom domain"**:
   - Enter: `muradhossen.portfolio.com`
   - Check "Enforce HTTPS" (after DNS propagates)
4. **Save**

### Step 4: Wait for DNS Propagation

- DNS changes can take **5 minutes to 48 hours** to propagate
- Usually takes 15-30 minutes
- Check propagation status: [whatsmydns.net](https://www.whatsmydns.net)

### Step 5: Verify DNS Configuration

Use these commands to check if DNS is configured correctly:

```bash
# Check CNAME record
nslookup muradhossen.portfolio.com

# Or use dig (if available)
dig muradhossen.portfolio.com CNAME
```

Expected output should show:
- CNAME pointing to `yourusername.github.io`
- Or A records pointing to GitHub IPs (185.199.108.153, etc.)

### Step 6: Deploy Your Site

1. **Push the CNAME file to your repository**:
   ```bash
   git add public/CNAME
   git commit -m "Add custom domain CNAME"
   git push
   ```

2. **Trigger GitHub Actions deployment** (if using CI/CD):
   - The workflow will automatically deploy
   - Or manually trigger from Actions tab

### Troubleshooting

#### DNS Check Unsuccessful

**Common Issues:**

1. **Wrong CNAME value**:
   - ✅ Correct: `mrcodehunter.github.io` (your GitHub username)
   - ❌ Wrong: `github.io` or `github.com`

2. **DNS not propagated yet**:
   - Wait 15-30 minutes
   - Clear your DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)

3. **CNAME file not in public folder**:
   - Ensure `public/CNAME` exists
   - File should contain only: `muradhossen.portfolio.com` (no http:// or https://)

4. **GitHub Pages not enabled**:
   - Go to Settings → Pages
   - Source should be set to "GitHub Actions" or a branch

5. **Repository visibility**:
   - For custom domains, repository can be public or private
   - But GitHub Pages must be enabled

#### Check DNS Propagation

Visit: https://www.whatsmydns.net/#CNAME/muradhossen.portfolio.com

#### Verify GitHub Pages URL

Your site should be accessible at:
- `https://yourusername.github.io/portfolio` (default GitHub Pages URL)
- `https://muradhossen.portfolio.com` (custom domain, after DNS setup)

### Important Notes

1. **HTTPS**: GitHub automatically provides SSL certificates via Let's Encrypt
   - Enable "Enforce HTTPS" in GitHub Pages settings after DNS is configured
   - This may take a few hours after DNS propagation

2. **CNAME File Location**:
   - Must be in `public/CNAME` for React apps
   - Will be copied to `build/CNAME` during build
   - GitHub will read it from the deployed branch

3. **Subdomain vs Root Domain**:
   - `muradhossen.portfolio.com` = Subdomain (use CNAME)
   - `portfolio.com` = Root domain (can use A records or CNAME)

### Quick Checklist

- [ ] CNAME file created in `public/CNAME`
- [ ] CNAME DNS record added at DNS provider
- [ ] DNS record points to `yourusername.github.io`
- [ ] Custom domain entered in GitHub Pages settings
- [ ] Waited for DNS propagation (15-30 min)
- [ ] Site deployed via GitHub Actions
- [ ] HTTPS enabled in GitHub Pages settings

### Still Having Issues?

1. **Check GitHub Pages status**: Settings → Pages → Check for error messages
2. **Verify DNS**: Use `nslookup` or `dig` commands
3. **Check repository settings**: Ensure Pages is enabled
4. **Review GitHub Actions logs**: Check if deployment succeeded
5. **Contact DNS provider**: If DNS records aren't working
